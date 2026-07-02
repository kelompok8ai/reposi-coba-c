import type { DirectorDinas } from '../types/directorSchedule';

const today = new Date();
const fmt = (offset: number) => {
  const d = new Date(today);
  d.setDate(d.getDate() + offset);
  return d.toISOString().split('T')[0];
};

export const initialDirectorDinas: DirectorDinas[] = [
  {
    id: 'dinas-1',
    directorName: 'Drs. H. Ahmad Rizaldi, MM',
    position: 'Direktur Utama',
    destination: 'Jakarta',
    purpose: 'Rapat Koordinasi BPD dengan Kementerian Keuangan & OJK',
    startDate: fmt(2),
    endDate: fmt(4),
    startTime: '08:00',
    endTime: '17:00',
    transport: 'Pesawat',
    accommodation: 'Hotel Borobudur Jakarta',
    status: 'Scheduled',
    notes: 'Membawa laporan kinerja kuartal II 2026',
    reminders: { oneDayBefore: true, threeHoursBefore: true, thirtyMinutesBefore: true },
    createdBy: 'Corporate Secretary',
  },
  {
    id: 'dinas-2',
    directorName: 'Ir. Siti Nurhaliza, SE, Ak',
    position: 'Direktur Bisnis & Pemasaran',
    destination: 'Padang Sidempuan',
    purpose: 'Peresmian Kantor Cabang Pembantu & Kunjungan UMKM Binaan',
    startDate: fmt(5),
    endDate: fmt(5),
    startTime: '09:30',
    endTime: '16:00',
    transport: 'Kendaraan Dinas',
    accommodation: '-',
    status: 'Scheduled',
    notes: 'Koordinasi dengan Dinas Koperasi Tapanuli Selatan',
    reminders: { oneDayBefore: true, threeHoursBefore: false, thirtyMinutesBefore: true },
    createdBy: 'Corporate Secretary',
  },
  {
    id: 'dinas-3',
    directorName: 'Dr. Bambang Wijaya, SH, MH',
    position: 'Direktur Kepatuhan & Manajemen Risiko',
    destination: 'Bandung',
    purpose: 'Workshop GCG & Anti Fraud Perbankan Nasional',
    startDate: fmt(1),
    endDate: fmt(3),
    startTime: '07:30',
    endTime: '15:30',
    transport: 'Pesawat',
    accommodation: 'Hotel Santika Bandung',
    status: 'Scheduled',
    notes: 'Peserta workshop: 2 orang perwakilan',
    reminders: { oneDayBefore: true, threeHoursBefore: true, thirtyMinutesBefore: true },
    createdBy: 'Corporate Secretary',
  },
  {
    id: 'dinas-4',
    directorName: 'Drs. Hendra Gunawan, MM',
    position: 'Direktur Operasional',
    destination: 'Pematang Siantar',
    purpose: 'Evaluasi Operasional Cabang & Customer Gathering',
    startDate: fmt(-1),
    endDate: fmt(0),
    startTime: '08:00',
    endTime: '14:00',
    transport: 'Kendaraan Dinas',
    accommodation: '-',
    status: 'Ongoing',
    notes: 'Hadir bersama tim audit internal',
    reminders: { oneDayBefore: true, threeHoursBefore: true, thirtyMinutesBefore: false },
    createdBy: 'Corporate Secretary',
  },
];
