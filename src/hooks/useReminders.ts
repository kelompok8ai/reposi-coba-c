import { useCallback, useEffect, useState } from 'react';
import type { ActiveReminder, DirectorDinas, ReminderType } from '../types/directorSchedule';

const FIRED_KEY = 'banksumut-fired-reminders';

const REMINDER_LABELS: Record<ReminderType, { label: string; ms: number }> = {
  '1day': { label: '1 hari sebelumnya', ms: 24 * 60 * 60 * 1000 },
  '3hours': { label: '3 jam sebelumnya', ms: 3 * 60 * 60 * 1000 },
  '30min': { label: '30 menit sebelumnya', ms: 30 * 60 * 1000 },
};

function loadFired(): Set<string> {
  try {
    const raw = localStorage.getItem(FIRED_KEY);
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch {
    /* ignore */
  }
  return new Set();
}

function saveFired(fired: Set<string>) {
  localStorage.setItem(FIRED_KEY, JSON.stringify([...fired]));
}

function getScheduleDateTime(date: string, time: string): Date {
  return new Date(`${date}T${time}:00`);
}

function checkReminder(
  schedule: DirectorDinas,
  type: ReminderType,
  enabled: boolean,
): ActiveReminder | null {
  if (!enabled || schedule.status === 'Cancelled' || schedule.status === 'Completed') return null;

  const target = getScheduleDateTime(schedule.startDate, schedule.startTime);
  const now = Date.now();
  const diff = target.getTime() - now;
  const window = REMINDER_LABELS[type].ms;

  // Fire if within reminder window and not yet passed
  if (diff > 0 && diff <= window) {
    const firedKey = `${schedule.id}-${type}-${schedule.startDate}`;
    if (loadFired().has(firedKey)) return null;

    return {
      id: firedKey,
      scheduleId: schedule.id,
      type,
      directorName: schedule.directorName,
      destination: schedule.destination,
      purpose: schedule.purpose,
      startDate: schedule.startDate,
      startTime: schedule.startTime,
      message: `Dinas ${schedule.directorName} ke ${schedule.destination} — ${REMINDER_LABELS[type].label}`,
      firedAt: new Date().toISOString(),
    };
  }
  return null;
}

export function useReminders(schedules: DirectorDinas[]) {
  const [activeReminders, setActiveReminders] = useState<ActiveReminder[]>([]);
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>(
    typeof Notification !== 'undefined' ? Notification.permission : 'default',
  );

  const requestNotificationPermission = useCallback(async () => {
    if (typeof Notification === 'undefined') return false;
    const perm = await Notification.requestPermission();
    setNotificationPermission(perm);
    return perm === 'granted';
  }, []);

  const dismissReminder = useCallback((id: string) => {
    setActiveReminders((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const scanReminders = useCallback(() => {
    const fired = loadFired();
    const newReminders: ActiveReminder[] = [];

    for (const schedule of schedules) {
      const checks: [ReminderType, boolean][] = [
        ['1day', schedule.reminders.oneDayBefore],
        ['3hours', schedule.reminders.threeHoursBefore],
        ['30min', schedule.reminders.thirtyMinutesBefore],
      ];

      for (const [type, enabled] of checks) {
        const reminder = checkReminder(schedule, type, enabled);
        if (reminder) {
          newReminders.push(reminder);
          fired.add(reminder.id);

          if (notificationPermission === 'granted' && typeof Notification !== 'undefined') {
            new Notification('Reminder Dinas Direktur — Bank Sumut', {
              body: `${reminder.directorName} → ${reminder.destination}\n${reminder.purpose}\nMulai: ${reminder.startDate} ${reminder.startTime}`,
              icon: '/favicon.svg',
              tag: reminder.id,
            });
          }
        }
      }
    }

    if (newReminders.length > 0) {
      saveFired(fired);
      setActiveReminders((prev) => {
        const ids = new Set(prev.map((r) => r.id));
        return [...prev, ...newReminders.filter((r) => !ids.has(r.id))];
      });
    }
  }, [schedules, notificationPermission]);

  useEffect(() => {
    scanReminders();
    const interval = setInterval(scanReminders, 60_000);
    return () => clearInterval(interval);
  }, [scanReminders]);

  const upcomingSchedules = schedules
    .filter((s) => s.status === 'Scheduled' || s.status === 'Ongoing')
    .map((s) => ({
      ...s,
      startsAt: getScheduleDateTime(s.startDate, s.startTime).getTime(),
    }))
    .filter((s) => s.startsAt > Date.now())
    .sort((a, b) => a.startsAt - b.startsAt)
    .slice(0, 5);

  return {
    activeReminders,
    upcomingSchedules,
    notificationPermission,
    requestNotificationPermission,
    dismissReminder,
  };
}

export function formatCountdown(startDate: string, startTime: string): string {
  const diff = getScheduleDateTime(startDate, startTime).getTime() - Date.now();
  if (diff <= 0) return 'Sedang berlangsung / selesai';

  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const mins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));

  if (days > 0) return `${days} hari ${hours} jam lagi`;
  if (hours > 0) return `${hours} jam ${mins} menit lagi`;
  return `${mins} menit lagi`;
}
