import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus, Plane, MapPin, Calendar, Clock, Bell, BellOff,
  Trash2, Edit2, X, Check, AlertCircle,
} from 'lucide-react';
import { SectionHeader } from './shared';
import { createEmptySchedule } from '../hooks/useDirectorSchedule';
import { formatCountdown } from '../hooks/useReminders';
import type { DirectorDinas, DinasStatus } from '../types/directorSchedule';
import { DIRECTOR_OPTIONS } from '../types/directorSchedule';

const STATUS_STYLES: Record<DinasStatus, string> = {
  Scheduled: 'bg-blue-50 text-primary',
  Ongoing: 'bg-emerald-50 text-success',
  Completed: 'bg-gray-100 text-text-secondary',
  Cancelled: 'bg-red-50 text-danger',
};

interface FormModalProps {
  initial: Omit<DirectorDinas, 'id'> | DirectorDinas;
  onSave: (data: Omit<DirectorDinas, 'id'>) => void;
  onClose: () => void;
  title: string;
}

function FormModal({ initial, onSave, onClose, title }: FormModalProps) {
  const [form, setForm] = useState(initial);
  const set = (key: keyof typeof form, val: string | boolean) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.directorName || !form.destination || !form.purpose) return;
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface rounded-card shadow-elevated w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h3 className="font-bold text-lg text-navy">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-background rounded-lg"><X size={18} /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Nama Direktur *</label>
              <input
                required
                value={form.directorName}
                onChange={(e) => set('directorName', e.target.value)}
                placeholder="Drs. H. Ahmad Rizaldi, MM"
                className="w-full px-3 py-2 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Jabatan</label>
              <select
                value={form.position}
                onChange={(e) => set('position', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {DIRECTOR_OPTIONS.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Tujuan Dinas *</label>
              <input
                required
                value={form.destination}
                onChange={(e) => set('destination', e.target.value)}
                placeholder="Jakarta, Medan, dll."
                className="w-full px-3 py-2 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Transportasi</label>
              <select
                value={form.transport}
                onChange={(e) => set('transport', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-xl text-sm"
              >
                {['Pesawat', 'Kendaraan Dinas', 'Kereta Api', 'Kapal'].map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Tanggal Mulai *</label>
              <input
                required type="date" value={form.startDate}
                onChange={(e) => set('startDate', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Tanggal Selesai *</label>
              <input
                required type="date" value={form.endDate}
                onChange={(e) => set('endDate', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Jam Berangkat *</label>
              <input
                required type="time" value={form.startTime}
                onChange={(e) => set('startTime', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-text-secondary mb-1 block">Jam Kembali</label>
              <input
                type="time" value={form.endTime}
                onChange={(e) => set('endTime', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-xl text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-text-secondary mb-1 block">Keperluan / Agenda *</label>
            <textarea
              required rows={2} value={form.purpose}
              onChange={(e) => set('purpose', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-text-secondary mb-1 block">Akomodasi</label>
            <input
              value={form.accommodation}
              onChange={(e) => set('accommodation', e.target.value)}
              placeholder="Hotel / tidak menginap"
              className="w-full px-3 py-2 border border-border rounded-xl text-sm"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-text-secondary mb-1 block">Catatan</label>
            <textarea
              rows={2} value={form.notes}
              onChange={(e) => set('notes', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-xl text-sm resize-none"
            />
          </div>

          {/* Reminder Settings */}
          <div className="p-4 bg-background rounded-xl border border-border">
            <h4 className="font-semibold text-sm text-navy mb-3 flex items-center gap-2">
              <Bell size={16} className="text-gold" /> Pengaturan Reminder
            </h4>
            <div className="grid sm:grid-cols-3 gap-3">
              {([
                ['oneDayBefore', '1 hari sebelumnya'],
                ['threeHoursBefore', '3 jam sebelumnya'],
                ['thirtyMinutesBefore', '30 menit sebelumnya'],
              ] as const).map(([key, label]) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={form.reminders[key]}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        reminders: { ...f.reminders, [key]: e.target.checked },
                      }))
                    }
                    className="w-4 h-4 accent-primary"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="submit" className="btn-primary flex-1">
              <Check size={16} /> Simpan Jadwal
            </button>
            <button type="button" onClick={onClose} className="btn-secondary flex-1">Batal</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

interface Props {
  schedules: DirectorDinas[];
  onAdd: (data: Omit<DirectorDinas, 'id'>) => void;
  onUpdate: (id: string, data: Partial<DirectorDinas>) => void;
  onDelete: (id: string) => void;
}

export default function DirectorDinasSchedule({ schedules, onAdd, onUpdate, onDelete }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<DirectorDinas | null>(null);
  const [filterStatus, setFilterStatus] = useState<DinasStatus | 'All'>('All');

  const filtered = filterStatus === 'All'
    ? schedules
    : schedules.filter((s) => s.status === filterStatus);

  const upcoming = schedules
    .filter((s) => s.status === 'Scheduled' || s.status === 'Ongoing')
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

  return (
    <section id="jadwal-dinas-direktur" className="py-12 lg:py-16 bg-surface">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <SectionHeader
            title="Jadwal Dinas Direktur"
            subtitle="Penjadwalan perjalanan dinas direksi Bank Sumut beserta reminder otomatis"
          />
          <button onClick={() => setShowForm(true)} className="btn-primary shrink-0">
            <Plus size={18} /> Tambah Jadwal Dinas
          </button>
        </div>

        {/* Upcoming strip */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {upcoming.slice(0, 4).map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-base p-4 border-l-4 border-l-gold"
            >
              <div className="text-[10px] font-semibold text-gold uppercase tracking-wider mb-1">
                {formatCountdown(s.startDate, s.startTime)}
              </div>
              <div className="font-bold text-sm text-navy">{s.directorName}</div>
              <div className="text-xs text-text-secondary">{s.position}</div>
              <div className="flex items-center gap-1 text-xs text-primary mt-2">
                <MapPin size={12} /> {s.destination}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {(['All', 'Scheduled', 'Ongoing', 'Completed', 'Cancelled'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                filterStatus === s ? 'bg-primary text-white' : 'bg-background text-text-secondary hover:bg-primary/10'
              }`}
            >
              {s === 'All' ? 'Semua' : s}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="card-base overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-background border-b border-border">
                  {['Direktur', 'Tujuan', 'Keperluan', 'Tanggal', 'Waktu', 'Transport', 'Status', 'Reminder', 'Aksi'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filtered.map((s) => (
                    <motion.tr
                      key={s.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-b border-border hover:bg-background/50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="font-semibold text-navy whitespace-nowrap">{s.directorName}</div>
                        <div className="text-xs text-text-secondary">{s.position}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="flex items-center gap-1"><MapPin size={12} className="text-primary" />{s.destination}</span>
                      </td>
                      <td className="px-4 py-3 max-w-[200px]">
                        <span className="line-clamp-2 text-xs">{s.purpose}</span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs">
                        <div className="flex items-center gap-1"><Calendar size={12} />{s.startDate}</div>
                        {s.endDate !== s.startDate && <div className="text-text-secondary">s/d {s.endDate}</div>}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs">
                        <div className="flex items-center gap-1"><Clock size={12} />{s.startTime}</div>
                        {s.endTime && <div className="text-text-secondary">s/d {s.endTime}</div>}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs">
                        <span className="flex items-center gap-1">
                          {s.transport === 'Pesawat' ? <Plane size={12} /> : <MapPin size={12} />}
                          {s.transport}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={s.status}
                          onChange={(e) => onUpdate(s.id, { status: e.target.value as DinasStatus })}
                          className={`px-2 py-0.5 rounded-full text-xs font-medium border-0 cursor-pointer ${STATUS_STYLES[s.status]}`}
                        >
                          {(['Scheduled', 'Ongoing', 'Completed', 'Cancelled'] as DinasStatus[]).map((st) => (
                            <option key={st} value={st}>{st}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-0.5 text-[10px]">
                          {s.reminders.oneDayBefore && <span className="text-success flex items-center gap-0.5"><Bell size={10} /> 1 hari</span>}
                          {s.reminders.threeHoursBefore && <span className="text-primary flex items-center gap-0.5"><Bell size={10} /> 3 jam</span>}
                          {s.reminders.thirtyMinutesBefore && <span className="text-warning flex items-center gap-0.5"><Bell size={10} /> 30 mnt</span>}
                          {!s.reminders.oneDayBefore && !s.reminders.threeHoursBefore && !s.reminders.thirtyMinutesBefore && (
                            <span className="text-text-secondary flex items-center gap-0.5"><BellOff size={10} /> Off</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <button
                            onClick={() => setEditing(s)}
                            className="p-1.5 hover:bg-primary/10 rounded-lg text-primary"
                            title="Edit"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            onClick={() => { if (confirm('Hapus jadwal dinas ini?')) onDelete(s.id); }}
                            className="p-1.5 hover:bg-red-50 rounded-lg text-danger"
                            title="Hapus"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="p-12 text-center text-text-secondary">
              <AlertCircle size={32} className="mx-auto mb-3 opacity-40" />
              <p>Belum ada jadwal dinas untuk filter ini.</p>
            </div>
          )}
        </div>
      </div>

      {showForm && (
        <FormModal
          title="Tambah Jadwal Dinas Direktur"
          initial={createEmptySchedule()}
          onSave={onAdd}
          onClose={() => setShowForm(false)}
        />
      )}

      {editing && (
        <FormModal
          title="Edit Jadwal Dinas Direktur"
          initial={editing}
          onSave={(data) => { onUpdate(editing.id, data); setEditing(null); }}
          onClose={() => setEditing(null)}
        />
      )}
    </section>
  );
}
