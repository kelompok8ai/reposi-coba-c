import { Calendar, Megaphone, AlertTriangle, Phone, TrendingUp, Newspaper } from 'lucide-react';
import { sidebarItems } from '../data/mockData';

export default function Sidebar() {
  return (
    <aside className="hidden xl:block w-80 shrink-0">
      <div className="sticky top-24 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin pr-1">
        {/* Agenda */}
        <div className="card-base p-4">
          <h3 className="font-bold text-sm text-navy mb-3 flex items-center gap-2">
            <Calendar size={16} className="text-primary" /> Agenda Hari Ini
          </h3>
          <div className="space-y-2">
            {sidebarItems.agenda.map((a) => (
              <div key={a.title} className="flex items-center justify-between text-xs p-2 bg-background rounded-lg">
                <span className="font-medium text-navy">{a.title}</span>
                <span className="text-text-secondary">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Press Schedule */}
        <div className="card-base p-4">
          <h3 className="font-bold text-sm text-navy mb-3 flex items-center gap-2">
            <Megaphone size={16} className="text-primary" /> Press Conference
          </h3>
          {sidebarItems.pressSchedule.map((p) => (
            <div key={p.title} className="flex items-center justify-between text-xs p-2 bg-background rounded-lg mb-2">
              <span className="font-medium">{p.title}</span>
              <span className="text-primary font-semibold">{p.date}</span>
            </div>
          ))}
        </div>

        {/* Announcements */}
        <div className="card-base p-4">
          <h3 className="font-bold text-sm text-navy mb-3">Pengumuman Perusahaan</h3>
          {sidebarItems.announcements.map((a) => (
            <div key={a} className="text-xs p-2 border-l-2 border-gold pl-3 mb-2 text-text-secondary hover:text-primary cursor-pointer transition-colors">
              {a}
            </div>
          ))}
        </div>

        {/* Top Media */}
        <div className="card-base p-4">
          <h3 className="font-bold text-sm text-navy mb-3 flex items-center gap-2">
            <Newspaper size={16} className="text-primary" /> Top Media
          </h3>
          <div className="flex flex-wrap gap-2">
            {sidebarItems.topMedia.map((m) => (
              <span key={m} className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full cursor-pointer hover:bg-primary hover:text-white transition-colors">
                {m}
              </span>
            ))}
          </div>
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
