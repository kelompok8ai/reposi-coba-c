import { motion } from 'framer-motion';
import { BookOpen, ChevronRight } from 'lucide-react';
import { knowledgeItems } from '../data/mockData';
import { SectionHeader } from './shared';

export default function KnowledgeCenter() {
  return (
    <section id="knowledge-center" className="py-12 lg:py-16 bg-surface">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Knowledge Center" subtitle="Panduan, SOP, dan dokumentasi komunikasi korporat" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {knowledgeItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-base p-5 flex items-center gap-4 cursor-pointer group hover:border-primary/40"
            >
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                <BookOpen size={18} className="text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-navy group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-xs text-text-secondary mt-0.5">{item.desc}</p>
              </div>
              <ChevronRight size={16} className="text-text-secondary group-hover:text-primary transition-colors shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
