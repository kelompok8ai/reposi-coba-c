import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const footerLinks = {
  'Corporate Secretary': ['Dashboard', 'Agenda', 'Laporan'],
  'Public Relation': ['Press Release', 'Media Kit', 'Campaign'],
  'Media Monitoring': ['Real-time', 'Analitik', 'Alert'],
  'Media Relation': ['Partner', 'Coverage', 'PIC'],
  'Corporate Communication': ['Guideline', 'Branding', 'SOP'],
  'Investor Relation': ['Financial Report', 'RUPS', 'Presentasi'],
  'Corporate Governance': ['GCG Report', 'Compliance', 'Audit'],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-8 mb-10">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm mb-3 text-gold">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-bold text-sm">BS</span>
              </div>
              <div>
                <div className="font-bold">PT Bank Pembangunan Daerah Sumatera Utara</div>
                <div className="text-xs text-white/60">Corporate Secretary Portal</div>
              </div>
            </div>
            <div className="space-y-2 text-xs text-white/60">
              <div className="flex items-center gap-2"><MapPin size={14} /> Jl. Putri Hijau No. 1, Medan, Sumatera Utara</div>
              <div className="flex items-center gap-2"><Phone size={14} /> +62 61 451 5000</div>
              <div className="flex items-center gap-2"><Mail size={14} /> sekretaris@banksumut.co.id</div>
              <div className="flex items-center gap-2"><Globe size={14} /> www.banksumut.co.id</div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end">
            <div className="flex gap-3 mb-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map((s) => (
                <a key={s} href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs hover:bg-primary transition-colors">
                  {s[0]}
                </a>
              ))}
            </div>
            <p className="text-xs text-white/40">
              Copyright &copy; {new Date().getFullYear()} PT Bank Sumut. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
