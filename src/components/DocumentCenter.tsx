import { motion } from 'framer-motion';
import {
  FileBarChart, Leaf, Building, Folder, Presentation,
  Palette, Image, Shield, Calculator, Globe, FileText,
} from 'lucide-react';
import { documents } from '../data/mockData';
import { SectionHeader } from './shared';

const iconMap: Record<string, React.ElementType> = {
  'file-bar-chart': FileBarChart, leaf: Leaf, building: Building, folder: Folder,
  presentation: Presentation, palette: Palette, image: Image, shield: Shield,
  calculator: Calculator, globe: Globe,
};

export default function DocumentCenter() {
  return (
    <section id="arsip" className="py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Document Center" subtitle="Repositori dokumen korporasi resmi" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {documents.map((doc, i) => {
            const Icon = iconMap[doc.icon] || FileText;
            return (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="card-base p-5 text-center cursor-pointer hover:border-primary/40 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <Icon size={22} className="text-primary group-hover:text-white" />
                </div>
                <h4 className="font-semibold text-sm text-navy mb-1">{doc.title}</h4>
                <span className="text-xs text-text-secondary">{doc.count} dokumen</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
