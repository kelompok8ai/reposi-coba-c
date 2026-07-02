import { useCallback, useEffect, useState } from 'react';
import { initialDirectorDinas } from '../data/directorDinasData';
import type { DirectorDinas, ReminderSettings } from '../types/directorSchedule';
import { DEFAULT_REMINDERS } from '../types/directorSchedule';

const STORAGE_KEY = 'banksumut-director-dinas';

function loadSchedules(): DirectorDinas[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as DirectorDinas[];
  } catch {
    /* ignore */
  }
  return initialDirectorDinas;
}

function saveSchedules(schedules: DirectorDinas[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(schedules));
}

export function useDirectorSchedule() {
  const [schedules, setSchedules] = useState<DirectorDinas[]>(loadSchedules);

  useEffect(() => {
    saveSchedules(schedules);
  }, [schedules]);

  const addSchedule = useCallback((data: Omit<DirectorDinas, 'id'>) => {
    const newItem: DirectorDinas = { ...data, id: `dinas-${Date.now()}` };
    setSchedules((prev) => [...prev, newItem].sort((a, b) => a.startDate.localeCompare(b.startDate)));
    return newItem;
  }, []);

  const updateSchedule = useCallback((id: string, data: Partial<DirectorDinas>) => {
    setSchedules((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...data } : s)).sort((a, b) => a.startDate.localeCompare(b.startDate)),
    );
  }, []);

  const deleteSchedule = useCallback((id: string) => {
    setSchedules((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const updateReminders = useCallback((id: string, reminders: ReminderSettings) => {
    setSchedules((prev) => prev.map((s) => (s.id === id ? { ...s, reminders } : s)));
  }, []);

  return { schedules, addSchedule, updateSchedule, deleteSchedule, updateReminders };
}

export function createEmptySchedule(): Omit<DirectorDinas, 'id'> {
  const today = new Date().toISOString().split('T')[0];
  return {
    directorName: '',
    position: 'Direktur Utama',
    destination: '',
    purpose: '',
    startDate: today,
    endDate: today,
    startTime: '08:00',
    endTime: '17:00',
    transport: 'Kendaraan Dinas',
    accommodation: '',
    status: 'Scheduled',
    notes: '',
    reminders: { ...DEFAULT_REMINDERS },
    createdBy: 'Corporate Secretary',
  };
}
