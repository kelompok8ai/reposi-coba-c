import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { calendarEvents } from '../data/mockData';
import { SectionHeader } from './shared';

const typeColors: Record<string, string> = {
  'Agenda Direksi': 'bg-navy text-white',
  'Press Conference': 'bg-primary text-white',
  'Media Visit': 'bg-gold text-navy',
  'Public Expose': 'bg-emerald-600 text-white',
  'Investor Meeting': 'bg-indigo-600 text-white',
  'CSR Activity': 'bg-teal-600 text-white',
  'Corporate Event': 'bg-purple-600 text-white',
  'Agenda Corporate Secretary': 'bg-sky-600 text-white',
};

export default function ExecutiveCalendar() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Executive Calendar" subtitle="Agenda direksi dan kegiatan korporasi" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {calendarEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-base p-4 hover:border-primary/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={16} className="text-primary" />
                <span className="text-sm font-semibold text-navy">{event.date}</span>
              </div>
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-2 ${typeColors[event.type] || 'bg-gray-100 text-text-secondary'}`}>
                {event.type}
              </span>
              <h4 className="font-semibold text-sm text-navy mb-2">{event.title}</h4>
              <div className="flex items-center gap-1 text-xs text-text-secondary">
                <Clock size={12} /> {event.time} WIB
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
