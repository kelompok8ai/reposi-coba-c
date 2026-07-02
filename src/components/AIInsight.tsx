import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, AlertCircle, Target, ArrowRight } from 'lucide-react';

export default function AIInsight() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-navy to-primary">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
            <Sparkles size={20} className="text-gold" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">AI Executive Insight</h2>
            <p className="text-white/60 text-sm">Ringkasan intelijen otomatis untuk pengambilan keputusan</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-card p-6 lg:p-8 mb-6"
        >
          <blockquote className="text-white/90 text-base lg:text-lg leading-relaxed italic border-l-4 border-gold pl-4">
            Dalam 24 jam terakhir pemberitaan mengenai Bank Sumut didominasi oleh transformasi digital,
            ekspansi layanan, dan program CSR. Sentimen positif meningkat sebesar 12%, sedangkan isu
            negatif masih berada pada kategori rendah dan memerlukan pemantauan rutin.
          </blockquote>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Lightbulb, title: 'Executive Recommendation', color: 'text-gold', content: 'Perkuat narasi transformasi digital melalui press release dan media engagement di platform digital.' },
            { icon: AlertCircle, title: 'Potential Risk', color: 'text-orange-300', content: 'Pantau isu rumor merger BPD yang masih beredar di media finansial. Siapkan official statement.' },
            { icon: Target, title: 'Opportunity', color: 'text-emerald-300', content: 'Momentum positif penghargaan Best Regional Development Bank dapat dimaksimalkan untuk brand positioning.' },
            { icon: ArrowRight, title: 'Next Action', color: 'text-blue-200', content: 'Jadwalkan press conference kuartal II dan siapkan media kit lengkap untuk 15 media partner utama.' },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-card p-5 hover:bg-white/10 transition-colors duration-200"
            >
              <item.icon size={20} className={`${item.color} mb-3`} />
              <h4 className="font-semibold text-white text-sm mb-2">{item.title}</h4>
              <p className="text-white/70 text-xs leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
