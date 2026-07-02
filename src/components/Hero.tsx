import { motion } from 'framer-motion';
import { BarChart3, Radio } from 'lucide-react';
import { heroStats } from '../data/mockData';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Bank Sumut Headquarters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-primary/85 to-primary/70" />
        {/* Digital Network Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy/50 to-transparent" />
      </div>

      <div className="relative max-w-container mx-auto px-4 lg:px-6 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-white/90 text-xs font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              PT Bank Pembangunan Daerah Sumatera Utara
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4">
              Corporate Secretary
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-gold mb-6">
              Public Relation & Corporate Communication Intelligence
            </h2>
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              Menyediakan pusat informasi strategis perusahaan yang mendukung komunikasi publik,
              monitoring media, analisis reputasi, dokumentasi korporasi, serta pengambilan
              keputusan Direksi melalui dashboard informasi yang terintegrasi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#media-monitoring" className="btn-primary">
                <BarChart3 size={18} />
                Dashboard Monitoring
              </a>
              <a href="#analitik" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Radio size={18} />
                Media Intelligence
              </a>
            </div>
          </motion.div>

          {/* Executive Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 lg:p-8"
          >
            <h3 className="text-white font-bold text-lg mb-1">Executive Summary</h3>
            <p className="text-white/60 text-xs mb-5">Real-time Corporate Communication Intelligence</p>
            <div className="grid grid-cols-2 gap-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-colors duration-200">
                  <div className="text-white/60 text-[10px] uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className={`font-bold text-lg ${stat.label === 'Risk Alert' && stat.value === 'Low' ? 'text-emerald-300' : stat.label.includes('Negative') ? 'text-red-300' : stat.label.includes('Positive') ? 'text-emerald-300' : 'text-white'}`}>
                    {stat.value}
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
