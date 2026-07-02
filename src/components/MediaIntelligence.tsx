import { motion } from 'framer-motion';
import {
  Newspaper, Globe, BookOpen, Tv, Radio, Share2, UserCheck, Users, Megaphone, Heart,
} from 'lucide-react';
import { mediaIntelligence } from '../data/mockData';
import { SectionHeader, TrendIndicator } from './shared';

const iconMap: Record<string, React.ElementType> = {
  newspaper: Newspaper, globe: Globe, 'book-open': BookOpen, tv: Tv, radio: Radio,
  'share-2': Share2, 'user-check': UserCheck, users: Users, megaphone: Megaphone, heart: Heart,
};

export default function MediaIntelligence() {
  return (
    <section id="media-monitoring" className="py-12 lg:py-16 bg-surface">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Media Intelligence Dashboard" subtitle="Monitoring dan analisis cakupan media real-time" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mediaIntelligence.map((item, i) => {
            const Icon = iconMap[item.icon] || Newspaper;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-base p-5 text-center hover:-translate-y-1"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="kpi-value text-xl mb-1">
                  {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
                </div>
                <div className="text-xs text-text-secondary mb-2">{item.label}</div>
                <TrendIndicator change={item.change} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
