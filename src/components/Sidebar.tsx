import { Calendar, Bell, AlertTriangle, Phone, TrendingUp, MapPin } from 'lucide-react';
import { sidebarItems } from '../data/mockData';
import { formatCountdown } from '../hooks/useReminders';
import type { DirectorDinas } from '../types/directorSchedule';

interface Props {
  upcomingDinas: DirectorDinas[];
}

export default function Sidebar({ upcomingDinas }: Props) {
  return (
    <aside className="hidden xl:block w-80 shrink-0">
      <div className="sticky top-24 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin pr-1">
        {/* Dinas Direktur Reminder */}
        <div className="card-base p-4 border-gold/30 border-2">
          <h3 className="font-bold text-sm text-navy mb-3 flex items-center gap-2">
            <Bell size={16} className="text-gold" /> Reminder Dinas Direktur
          </h3>
          {upcomingDinas.length === 0 ? (
            <p className="text-xs text-text-secondary">Tidak ada dinas terjadwal.</p>
          ) : (
            <div className="space-y-2">
              {upcomingDinas.map((d) => (
                <div key={d.id} className="p-3 bg-gold/5 rounded-xl border border-gold/20">
                  <div className="text-[10px] font-semibold text-gold mb-1">
                    {formatCountdown(d.startDate, d.startTime)}
                  </div>
                  <div className="font-semibold text-xs text-navy">{d.directorName}</div>
                  <div className="text-[10px] text-text-secondary flex items-center gap-1 mt-1">
                    <MapPin size={10} /> {d.destination}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Press Schedule */}
        <div className="card-base p-4">
          <h3 className="font-bold text-sm text-navy mb-3 flex items-center gap-2">
            <Calendar size={16} className="text-primary" /> Press Conference
          </h3>
          {sidebarItems.pressSchedule.map((p) => (
            <div key={p.title} className="flex items-center justify-between text-xs p-2 bg-background rounded-lg mb-2">
              <span className="font-medium">{p.title}</span>
              <span className="text-primary font-semibold">{p.date}</span>
            </div>
          ))}
        </div>

        {/* Trending */}
        <div className="card-base p-4">
          <h3 className="font-bold text-sm text-navy mb-3 flex items-center gap-2">
            <TrendingUp size={16} className="text-primary" /> Trending Issue
          </h3>
          {sidebarItems.trendingIssues.map((t, i) => (
            <div key={t} className="flex items-center gap-2 text-xs py-1.5">
              <span className="w-5 h-5 bg-navy text-white rounded text-[10px] flex items-center justify-center font-bold">{i + 1}</span>
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>

        {/* Crisis Alert */}
        <div className="card-base p-4 border-emerald-200">
          <h3 className="font-bold text-sm text-navy mb-3 flex items-center gap-2">
            <AlertTriangle size={16} className="text-success" /> Crisis Alert
          </h3>
          {sidebarItems.crisisAlerts.map((c) => (
            <div key={c.message} className="text-xs p-3 bg-emerald-50 rounded-lg">
              <span className="font-semibold text-success">{c.level}: </span>
              {c.message}
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="card-base p-4 bg-navy text-white">
          <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
            <Phone size={16} className="text-gold" /> Emergency Contact
          </h3>
          <div className="text-xs space-y-1">
            <div className="font-semibold">{sidebarItems.emergencyContact.name}</div>
            <div className="text-white/70">{sidebarItems.emergencyContact.phone}</div>
            <div className="text-white/70">{sidebarItems.emergencyContact.email}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
