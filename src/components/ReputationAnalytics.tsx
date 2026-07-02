import { motion } from 'framer-motion';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { AlertTriangle } from 'lucide-react';
import { chartData } from '../data/mockData';
import { SectionHeader } from './shared';

const PIE_COLORS = ['#005BAC', '#063970', '#F4B400', '#059669', '#EA580C'];

export default function ReputationAnalytics() {
  return (
    <section id="analitik" className="py-12 lg:py-16">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Reputation Analytics" subtitle="Analisis tren reputasi dan distribusi media" />

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Daily News Trend */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card-base p-6">
            <h3 className="font-semibold text-navy mb-4">Daily News Trend</h3>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={chartData.daily}>
                <defs>
                  <linearGradient id="colorNews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#005BAC" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#005BAC" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="news" stroke="#005BAC" fill="url(#colorNews)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Sentiment Trend */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card-base p-6">
            <h3 className="font-semibold text-navy mb-4">Sentiment Trend (Weekly)</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={chartData.daily}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="sentiment" fill="#059669" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Media Distribution */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card-base p-6">
            <h3 className="font-semibold text-navy mb-4">Media Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={chartData.mediaDistribution} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                  {chartData.mediaDistribution.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Share of Voice */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card-base p-6">
            <h3 className="font-semibold text-navy mb-4">Share of Voice</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData.shareOfVoice} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={80} />
                <Tooltip />
                <Bar dataKey="value" fill="#005BAC" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Crisis Alert & Topics */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card-base p-6">
            <h3 className="font-semibold text-navy mb-4">Crisis Alert & Topic Growth</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <AlertTriangle size={18} className="text-success" />
                <div>
                  <div className="text-sm font-semibold text-success">Status: Low Risk</div>
                  <div className="text-xs text-text-secondary">Tidak ada isu krisis aktif</div>
                </div>
              </div>
              {[
                { topic: 'Digital Banking', growth: 45 },
                { topic: 'CSR UMKM', growth: 32 },
                { topic: 'Green Banking', growth: 28 },
                { topic: 'Transformasi Digital', growth: 22 },
              ].map((t) => (
                <div key={t.topic} className="flex items-center justify-between">
                  <span className="text-sm text-text-primary">{t.topic}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${t.growth}%` }} />
                    </div>
                    <span className="text-xs font-medium text-success">+{t.growth}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
