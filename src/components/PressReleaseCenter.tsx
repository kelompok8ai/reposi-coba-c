import { motion } from 'framer-motion';
import { Download, Image, FolderOpen, Share2, ArrowRight } from 'lucide-react';
import { pressReleases } from '../data/mockData';
import { SectionHeader } from './shared';

export default function PressReleaseCenter() {
  return (
    <section id="press-release" className="py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Press Release Center" subtitle="Siaran pers resmi dan media kit perusahaan" />
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          <div className="space-y-6">
            {pressReleases.map((pr, i) => (
              <motion.div
                key={pr.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-base p-5 md:ml-12 relative group"
              >
                <div className="absolute -left-0 md:-left-6 top-6 w-3 h-3 bg-primary rounded-full border-4 border-surface hidden md:block" />
                <div className="grid md:grid-cols-[200px_1fr] gap-5">
                  <img src={pr.image} alt={pr.title} className="w-full h-32 md:h-full rounded-xl object-cover" />
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">{pr.category}</span>
                      <span className="text-xs text-text-secondary">{pr.date}</span>
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-primary transition-colors">{pr.title}</h3>
                    <p className="text-sm text-text-secondary mb-4">{pr.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-background rounded-lg hover:bg-primary/10 transition-colors">
                        <Download size={14} /> PDF
                      </button>
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-background rounded-lg hover:bg-primary/10 transition-colors">
                        <Image size={14} /> Image
                      </button>
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-background rounded-lg hover:bg-primary/10 transition-colors">
                        <FolderOpen size={14} /> Media Kit
                      </button>
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-background rounded-lg hover:bg-primary/10 transition-colors">
                        <Share2 size={14} /> Share
                      </button>
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-primary rounded-lg hover:bg-primary/10 transition-colors ml-auto">
                        Baca Selengkapnya <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
