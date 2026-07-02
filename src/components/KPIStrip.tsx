import { motion } from 'framer-motion';
import {
  Award, Eye, ThumbsUp, FileText, MessageCircle, TrendingUp,
  Heart, Users, Smartphone, Handshake,
} from 'lucide-react';
import { kpiStrip } from '../data/mockData';
import { TrendIndicator, useAnimatedCounter } from './shared';

const iconMap: Record<string, React.ElementType> = {
  award: Award, eye: Eye, 'thumbs-up': ThumbsUp, 'file-text': FileText,
  'message-circle': MessageCircle, 'trending-up': TrendingUp, heart: Heart,
  users: Users, smartphone: Smartphone, handshake: Handshake,
};

function KPICard({ item, index }: { item: typeof kpiStrip[0]; index: number }) {
  const strVal = String(item.value);
  const isPercent = strVal.includes('%');
  const hasSuffix = /[KM%]/.test(strVal);
  const numericValue = typeof item.value === 'number'
    ? item.value
    : parseFloat(strVal.replace(/[^0-9.]/g, '')) || 0;
  const animated = useAnimatedCounter(hasSuffix && !isPercent ? numericValue : numericValue, 2000, strVal.includes('.') && !isPercent ? 1 : 0);
  const Icon = iconMap[item.icon] || TrendingUp;

  const displayValue = () => {
    if (hasSuffix && typeof item.value === 'string') return item.value;
    if (isPercent) return `${animated}%`;
    return typeof item.value === 'number' ? animated.toLocaleString() : item.value;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="card-base p-4 min-w-[180px] flex-shrink-0 hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon size={18} className="text-primary" />
        </div>
        <TrendIndicator change={item.change} />
      </div>
      <div className="kpi-value text-xl">{displayValue()}</div>
      <div className="text-xs text-text-secondary mt-1 leading-snug">{item.label}</div>
    </motion.div>
  );
}

export default function KPIStrip() {
  return (
    <section className="bg-surface border-y border-border py-6 -mt-1 relative z-10">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="flex gap-4 overflow-x-auto scrollbar-thin pb-2">
          {kpiStrip.map((item, i) => (
            <KPICard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
