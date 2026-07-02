import { Bell, BellRing, X } from 'lucide-react';
import type { ActiveReminder } from '../types/directorSchedule';

interface Props {
  reminders: ActiveReminder[];
  notificationPermission: NotificationPermission;
  onRequestPermission: () => void;
  onDismiss: (id: string) => void;
}

export default function ReminderBanner({ reminders, notificationPermission, onRequestPermission, onDismiss }: Props) {
  if (reminders.length === 0 && notificationPermission === 'granted') return null;

  return (
    <div className="bg-gold/10 border-b border-gold/30">
      <div className="max-w-container mx-auto px-4 lg:px-6 py-3">
        {notificationPermission !== 'granted' && (
          <div className="flex items-center justify-between gap-4 mb-2 p-3 bg-surface rounded-xl border border-gold/40">
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-gold shrink-0" />
              <p className="text-sm text-navy">
                Aktifkan notifikasi browser agar reminder dinas direktur muncul otomatis.
              </p>
            </div>
            <button onClick={onRequestPermission} className="btn-primary text-xs py-2 px-4 shrink-0">
              Aktifkan Reminder
            </button>
          </div>
        )}

        {reminders.map((r) => (
          <div
            key={r.id}
            className="flex items-start justify-between gap-4 p-3 bg-surface rounded-xl border border-gold/40 mb-2 last:mb-0 animate-fade-in"
          >
            <div className="flex items-start gap-3">
              <BellRing size={18} className="text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-navy">{r.message}</p>
                <p className="text-xs text-text-secondary mt-0.5">
                  {r.directorName} → {r.destination} | {r.startDate} pukul {r.startTime}
                </p>
                <p className="text-xs text-text-secondary">{r.purpose}</p>
              </div>
            </div>
            <button
              onClick={() => onDismiss(r.id)}
              className="p-1.5 hover:bg-background rounded-lg text-text-secondary shrink-0"
              aria-label="Tutup reminder"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
