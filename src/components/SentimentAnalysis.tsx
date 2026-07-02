import { motion } from 'framer-motion';
import { ThumbsUp, Minus, ThumbsDown } from 'lucide-react';
import { SectionHeader } from './shared';

const sentiments = [
  {
    type: 'positive' as const,
    icon: ThumbsUp,
    percentage: 72,
    totalNews: 924,
    growth: 12,
    topic: 'Transformasi Digital',
    media: 'Kompas, Antara',
    insight: 'Sentimen positif didorong oleh program digital banking dan penghargaan perusahaan.',
    color: 'border-emerald-200',
    bg: 'bg-emerald-50',
    iconColor: 'text-success',
    barColor: 'bg-success',
  },
  {
    type: 'neutral' as const,
    icon: Minus,
    percentage: 21,
    totalNews: 269,
    growth: -2,
    topic: 'Kebijakan Moneter BI',
    media: 'Bisnis Indonesia',
    insight: 'Pemberitaan netral terkait kebijakan makroekonomi dan sektor perbankan nasional.',
    color: 'border-gray-200',
    bg: 'bg-gray-50',
    iconColor: 'text-text-secondary',
    barColor: 'bg-gray-400',
  },
  {
    type: 'negative' as const,
    icon: ThumbsDown,
    percentage: 7,
    totalNews: 91,
    growth: -5,
    topic: 'Isu Layanan Nasabah',
    media: 'Twitter/X',
    insight: 'Rekomendasi: Tingkatkan respons media sosial dan siapkan official statement.',
    color: 'border-red-200',
    bg: 'bg-red-50',
    iconColor: 'text-danger',
    barColor: 'bg-danger',
  },
];

export default function SentimentAnalysis() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Sentiment Analysis" subtitle="Analisis sentimen media dan rekomendasi AI" />
        <div className="grid md:grid-cols-3 gap-6">
          {sentiments.map((s, i) => (
            <motion.div
              key={s.type}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card-base p-6 border-2 ${s.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center`}>
                  <s.icon size={20} className={s.iconColor} />
                </div>
                <span className={`text-3xl font-bold ${s.iconColor}`}>{s.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-background rounded-full mb-4 overflow-hidden">
                <div className={`h-full ${s.barColor} rounded-full transition-all duration-1000`} style={{ width: `${s.percentage}%` }} />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total Berita</span>
                  <span className="font-semibold">{s.totalNews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Pertumbuhan</span>
                  <span className={`font-semibold ${s.growth >= 0 ? 'text-success' : 'text-danger'}`}>
                    {s.growth >= 0 ? '+' : ''}{s.growth}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">{s.type === 'negative' ? 'Isu Terbesar' : 'Topik Dominan'}</span>
                  <span className="font-medium text-right text-xs">{s.topic}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Media Dominan</span>
                  <span className="font-medium text-right text-xs">{s.media}</span>
                </div>
              </div>
              <div className={`mt-4 p-3 ${s.bg} rounded-xl text-xs leading-relaxed`}>
                <span className="font-semibold">AI {s.type === 'negative' ? 'Recommendation' : 'Insight'}: </span>
                {s.insight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
