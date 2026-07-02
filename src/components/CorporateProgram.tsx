import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { corporatePrograms } from '../data/mockData';
import { SectionHeader } from './shared';

export default function CorporateProgram() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Corporate Program" subtitle="Program strategis dan inisiatif korporasi" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporatePrograms.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-base overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{program.title}</h3>
                  <p className="text-white/70 text-sm">{program.desc}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-xs text-text-secondary">Program Aktif</span>
                <button className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Lihat Detail <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
