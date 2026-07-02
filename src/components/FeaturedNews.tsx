import { motion } from 'framer-motion';
import { Bookmark, Share2, Clock, Eye, ArrowRight } from 'lucide-react';
import { featuredNews } from '../data/mockData';
import { SectionHeader, SentimentBadge } from './shared';

export default function FeaturedNews() {
  const hero = featuredNews[0];
  const medium = featuredNews.slice(1, 4);
  const compact = featuredNews.slice(4);

  return (
    <section id="corporate-news" className="py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Featured News" subtitle="Berita terpilih dan analisis media terkini" />

        {/* Hero News */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-base overflow-hidden mb-6 group cursor-pointer"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img src={hero.image} alt={hero.headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">{hero.category}</span>
              </div>
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold text-primary">{hero.media}</span>
                <SentimentBadge sentiment={hero.sentiment} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-3 leading-tight group-hover:text-primary transition-colors">
                {hero.headline}
              </h3>
              <p className="text-text-secondary mb-4 line-clamp-3">{hero.summary}</p>
              <div className="flex items-center gap-4 text-xs text-text-secondary mb-4">
                <span>{hero.publishDate}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {hero.readingTime}</span>
                <span className="flex items-center gap-1"><Eye size={12} /> {hero.views.toLocaleString()}</span>
                <span>oleh {hero.author}</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="btn-primary text-sm py-2">
                  Baca Selengkapnya <ArrowRight size={14} />
                </button>
                <button className="p-2 hover:bg-background rounded-lg transition-colors"><Bookmark size={16} /></button>
                <button className="p-2 hover:bg-background rounded-lg transition-colors"><Share2 size={16} /></button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Medium News */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {medium.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-base overflow-hidden group cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={item.image} alt={item.headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-primary text-white text-[10px] font-semibold rounded-full">{item.category}</span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary">{item.media}</span>
                  <SentimentBadge sentiment={item.sentiment} />
                </div>
                <h4 className="font-bold text-navy text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">{item.headline}</h4>
                <p className="text-xs text-text-secondary line-clamp-2 mb-3">{item.summary}</p>
                <div className="flex items-center justify-between text-[10px] text-text-secondary">
                  <span>{item.publishDate}</span>
                  <span className="flex items-center gap-1"><Eye size={10} /> {item.views.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact News */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {compact.map((item) => (
            <div key={item.id} className="card-base p-4 flex gap-3 group cursor-pointer hover:border-primary/30">
              <img src={item.image} alt="" className="w-20 h-20 rounded-lg object-cover shrink-0" />
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-semibold text-primary">{item.media}</span>
                  <SentimentBadge sentiment={item.sentiment} />
                </div>
                <h4 className="font-semibold text-sm text-navy line-clamp-2 group-hover:text-primary transition-colors">{item.headline}</h4>
                <div className="flex items-center gap-2 mt-2 text-[10px] text-text-secondary">
                  <span>{item.publishDate}</span>
                  <span>{item.readingTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
