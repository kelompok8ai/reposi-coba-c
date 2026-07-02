export type DinasStatus = 'Scheduled' | 'Ongoing' | 'Completed' | 'Cancelled';

export interface ReminderSettings {
  oneDayBefore: boolean;
  threeHoursBefore: boolean;
  thirtyMinutesBefore: boolean;
}

export interface DirectorDinas {
  id: string;
  directorName: string;
  position: string;
  destination: string;
  purpose: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  transport: string;
  accommodation: string;
  status: DinasStatus;
  notes: string;
  reminders: ReminderSettings;
  createdBy: string;
}

export type ReminderType = '1day' | '3hours' | '30min';

export interface ActiveReminder {
  id: string;
  scheduleId: string;
  type: ReminderType;
  directorName: string;
  destination: string;
  purpose: string;
  startDate: string;
  startTime: string;
  message: string;
  firedAt: string;
}

export const DIRECTOR_OPTIONS = [
  'Direktur Utama',
  'Direktur Bisnis & Pemasaran',
  'Direktur Operasional',
  'Direktur Kepatuhan & Manajemen Risiko',
] as const;

export const DEFAULT_REMINDERS: ReminderSettings = {
  oneDayBefore: true,
  threeHoursBefore: true,
  thirtyMinutesBefore: true,
};
