import { motion } from 'framer-motion';
import { topics } from '../data/mockData';
import { SectionHeader } from './shared';

const sizes = [28, 22, 26, 20, 24, 18, 25, 21, 19, 23, 17, 22];

export default function TopicCloud() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Topic Cloud" subtitle="Topik trending dan hashtag monitoring" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card-base p-8 flex flex-wrap items-center justify-center gap-4"
        >
          {topics.map((topic, i) => (
            <motion.button
              key={topic}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-full border border-primary/20 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
              style={{ fontSize: `${sizes[i % sizes.length]}px` }}
            >
              {topic}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
