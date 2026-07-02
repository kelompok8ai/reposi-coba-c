import { motion } from 'framer-motion';
import { mediaPartners } from '../data/mockData';
import { SectionHeader } from './shared';

export default function MediaRelation() {
  return (
    <section id="media-relation" className="py-12 lg:py-16 bg-surface">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Media Relation" subtitle="Jaringan media partner dan hubungan strategis" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaPartners.map((media, i) => (
            <motion.div
              key={media.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="card-base p-5 text-center cursor-pointer hover:border-primary/40 group"
            >
              <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-200">
                <span className="text-white font-bold text-lg">{media.logo}</span>
              </div>
              <h4 className="font-bold text-navy text-sm mb-3">{media.name}</h4>
              <div className="space-y-1.5 text-xs text-text-secondary">
                <div className="flex justify-between">
                  <span>Coverage</span>
                  <span className="font-semibold text-navy">{media.coverage}</span>
                </div>
                <div className="flex justify-between">
                  <span>Terakhir</span>
                  <span className="font-medium">{media.lastPublication}</span>
                </div>
                <div className="flex justify-between">
                  <span>Score</span>
                  <span className="font-semibold text-success">{media.relationshipScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span>PIC</span>
                  <span className="font-medium">{media.pic}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
