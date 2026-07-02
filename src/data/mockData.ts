export type Sentiment = 'positive' | 'neutral' | 'negative';

export interface NewsItem {
  id: string;
  time: string;
  media: string;
  mediaLogo: string;
  category: string;
  headline: string;
  summary: string;
  sentiment: Sentiment;
  publishDate: string;
  author: string;
  readingTime: string;
  views: number;
  image: string;
  bookmarked?: boolean;
}

export interface KPIItem {
  label: string;
  value: string | number;
  change: number;
  icon: string;
}

export interface IssueItem {
  issue: string;
  category: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  owner: string;
  media: string;
  mention: number;
  trend: 'up' | 'down' | 'stable';
  status: 'Monitoring' | 'Investigating' | 'Escalated' | 'Resolved';
  sla: string;
  lastUpdate: string;
}

export interface PressRelease {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  image: string;
}

export interface MediaPartner {
  name: string;
  logo: string;
  coverage: number;
  lastPublication: string;
  relationshipScore: number;
  pic: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
}

export const navItems = [
  'Beranda', 'Media Monitoring', 'Corporate News', 'Press Release',
  'Publikasi', 'Media Relation', 'Analitik', 'Laporan', 'Arsip',
  'Governance', 'Knowledge Center',
];

export const quickFilters = [
  'Hari Ini', '7 Hari', '30 Hari', '90 Hari',
  'Positif', 'Netral', 'Negatif', 'CSR', 'Digital Banking',
  'Kredit', 'Dana', 'OJK', 'BI', 'Pemprov Sumut', 'Investor Relation',
];

export const tickerCategories = [
  'Bank Sumut', 'OJK', 'Bank Indonesia', 'Pemprov Sumatera Utara',
  'Industri Perbankan', 'Ekonomi Nasional', 'Pasar Keuangan',
];

export const topics = [
  '#BankSumut', '#DigitalBanking', '#TransformasiDigital', '#CSR',
  '#UMKM', '#QRIS', '#MobileBanking', '#Kredit', '#Dana',
  '#LiterasiKeuangan', '#BUMD', '#SumateraUtara',
];

export const heroStats = [
  { label: 'Total Berita Hari Ini', value: 47 },
  { label: 'Total Mention', value: 1284 },
  { label: 'Reputation Score', value: '8.4' },
  { label: 'Positive Sentiment', value: '72%' },
  { label: 'Neutral Sentiment', value: '21%' },
  { label: 'Negative Sentiment', value: '7%' },
  { label: 'Share of Voice', value: '34%' },
  { label: 'Trending Issue', value: 'Digital Banking' },
  { label: 'Risk Alert', value: 'Low' },
  { label: 'Media Reach', value: '2.4M' },
];

export const kpiStrip: KPIItem[] = [
  { label: 'Corporate Reputation Index', value: 8.4, change: 2.3, icon: 'award' },
  { label: 'Media Exposure', value: '1.2M', change: 15.4, icon: 'eye' },
  { label: 'Positive Coverage', value: '72%', change: 12.0, icon: 'thumbs-up' },
  { label: 'Press Release Published', value: 24, change: 8.0, icon: 'file-text' },
  { label: 'Total Mention', value: 1284, change: 18.2, icon: 'message-circle' },
  { label: 'Engagement Rate', value: '4.8%', change: 5.6, icon: 'trending-up' },
  { label: 'CSR Publication', value: 18, change: 22.0, icon: 'heart' },
  { label: 'Media Partnership', value: 42, change: 3.0, icon: 'users' },
  { label: 'Digital Campaign', value: 8, change: 25.0, icon: 'smartphone' },
  { label: 'Stakeholder Engagement', value: '89%', change: 4.2, icon: 'handshake' },
];

export const tickerNews: NewsItem[] = [
  { id: 't1', time: '09:45', media: 'Kompas', mediaLogo: 'K', category: 'Bank Sumut', headline: 'Bank Sumut Perkuat Layanan Digital Banking untuk UMKM Sumatera Utara', summary: '', sentiment: 'positive', publishDate: '', author: '', readingTime: '', views: 0, image: '' },
  { id: 't2', time: '09:32', media: 'Bisnis Indonesia', mediaLogo: 'BI', category: 'OJK', headline: 'OJK Dorong Transformasi Digital Perbankan Daerah', summary: '', sentiment: 'neutral', publishDate: '', author: '', readingTime: '', views: 0, image: '' },
  { id: 't3', time: '09:18', media: 'Antara', mediaLogo: 'A', category: 'Bank Indonesia', headline: 'BI Pertahankan Suku Bunga Acuan di Level 6%', summary: '', sentiment: 'neutral', publishDate: '', author: '', readingTime: '', views: 0, image: '' },
  { id: 't4', time: '08:55', media: 'Waspada', mediaLogo: 'W', category: 'Pemprov Sumatera Utara', headline: 'Gubernur Sumut Apresiasi Kontribusi Bank Sumut untuk Pembangunan Daerah', summary: '', sentiment: 'positive', publishDate: '', author: '', readingTime: '', views: 0, image: '' },
  { id: 't5', time: '08:40', media: 'CNBC Indonesia', mediaLogo: 'CN', category: 'Industri Perbankan', headline: 'Sektor Perbankan Tumbuh 8,2% di Kuartal Pertama 2026', summary: '', sentiment: 'positive', publishDate: '', author: '', readingTime: '', views: 0, image: '' },
  { id: 't6', time: '08:22', media: 'Kontan', mediaLogo: 'Ko', category: 'Ekonomi Nasional', headline: 'Inflasi Indonesia Stabil di 2,4% pada Juni 2026', summary: '', sentiment: 'neutral', publishDate: '', author: '', readingTime: '', views: 0, image: '' },
  { id: 't7', time: '08:05', media: 'Detik', mediaLogo: 'D', category: 'Pasar Keuangan', headline: 'IHSG Menguat 0,8% Didorong Sektor Keuangan', summary: '', sentiment: 'positive', publishDate: '', author: '', readingTime: '', views: 0, image: '' },
];

export const featuredNews: NewsItem[] = [
  {
    id: 'f1', time: '', media: 'Kompas', mediaLogo: 'K', category: 'Corporate News',
    headline: 'Bank Sumut Raih Penghargaan Best Regional Development Bank 2026',
    summary: 'PT Bank Pembangunan Daerah Sumatera Utara meraih penghargaan bergengsi sebagai Best Regional Development Bank 2026 atas komitmen transformasi digital dan pemberdayaan UMKM di wilayah Sumatera Utara.',
    sentiment: 'positive', publishDate: '2 Jul 2026', author: 'Redaksi Kompas', readingTime: '5 min', views: 12450,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    id: 'f2', time: '', media: 'Bisnis Indonesia', mediaLogo: 'BI', category: 'Digital Banking',
    headline: 'Bank Sumut Luncurkan Fitur QRIS Merchant untuk 10.000 UMKM',
    summary: 'Inisiatif digital banking terbaru mempermudah transaksi merchant UMKM di seluruh Sumatera Utara.',
    sentiment: 'positive', publishDate: '2 Jul 2026', author: 'Bisnis Indonesia', readingTime: '4 min', views: 8920,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
  },
  {
    id: 'f3', time: '', media: 'Antara', mediaLogo: 'A', category: 'CSR',
    headline: 'Program Literasi Keuangan Bank Sumut Jangkau 50.000 Masyarakat',
    summary: 'Program CSR literasi keuangan telah menjangkau lebih dari 50.000 masyarakat di 33 kabupaten/kota.',
    sentiment: 'positive', publishDate: '1 Jul 2026', author: 'Antara News', readingTime: '3 min', views: 6780,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
  },
  {
    id: 'f4', time: '', media: 'CNBC Indonesia', mediaLogo: 'CN', category: 'Financial',
    headline: 'Bank Sumut Catat Pertumbuhan Kredit 12,5% di Semester I 2026',
    summary: 'Pertumbuhan kredit didorong oleh sektor UMKM dan infrastruktur daerah.',
    sentiment: 'positive', publishDate: '1 Jul 2026', author: 'CNBC Indonesia', readingTime: '4 min', views: 5430,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
  },
  {
    id: 'f5', time: '', media: 'Tempo', mediaLogo: 'T', category: 'Governance',
    headline: 'Bank Sumut Perkuat Tata Kelola Perusahaan dengan Sertifikasi ISO 37001',
    summary: 'Sertifikasi anti-suap memperkuat komitmen GCG Bank Sumut.',
    sentiment: 'positive', publishDate: '30 Jun 2026', author: 'Tempo', readingTime: '3 min', views: 4210,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
  },
  {
    id: 'f6', time: '', media: 'Detik', mediaLogo: 'D', category: 'Technology',
    headline: 'Mobile Banking Bank Sumut Tembus 2 Juta Pengguna Aktif',
    summary: 'Aplikasi mobile banking mencatat pertumbuhan pengguna signifikan.',
    sentiment: 'positive', publishDate: '30 Jun 2026', author: 'Detik Finance', readingTime: '2 min', views: 3890,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
  },
  {
    id: 'f7', time: '', media: 'Kontan', mediaLogo: 'Ko', category: 'Investor',
    headline: 'RUPS Bank Sumut Setujui Dividen 25% dari Laba Bersih 2025',
    summary: 'Pembagian dividen mencerminkan kinerja keuangan yang solid.',
    sentiment: 'neutral', publishDate: '29 Jun 2026', author: 'Kontan', readingTime: '3 min', views: 5670,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&q=80',
  },
  {
    id: 'f8', time: '', media: 'Medan Bisnis', mediaLogo: 'MB', category: 'Regional',
    headline: 'Bank Sumut Dukung Pembangunan Infrastruktur Jalan Tol Medan-Binjai',
    summary: 'Pembiayaan proyek infrastruktur strategis nasional di Sumatera Utara.',
    sentiment: 'positive', publishDate: '29 Jun 2026', author: 'Medan Bisnis', readingTime: '4 min', views: 3120,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80',
  },
  {
    id: 'f9', time: '', media: 'Tribun', mediaLogo: 'Tr', category: 'Community',
    headline: 'Bank Sumut Gelar Festival UMKM Sumatera Utara 2026',
    summary: 'Festival menampilkan 500 UMKM dari seluruh wilayah Sumatera Utara.',
    sentiment: 'positive', publishDate: '28 Jun 2026', author: 'Tribun Medan', readingTime: '3 min', views: 4560,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80',
  },
  {
    id: 'f10', time: '', media: 'Analisa', mediaLogo: 'An', category: 'ESG',
    headline: 'Bank Sumut Terbitkan Sustainability Report 2025',
    summary: 'Laporan keberlanjutan mengukur dampak program ESG perusahaan.',
    sentiment: 'positive', publishDate: '28 Jun 2026', author: 'Analisa', readingTime: '5 min', views: 2890,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80',
  },
];

export const mediaIntelligence = [
  { label: 'Total News', value: 1284, change: 18.2, icon: 'newspaper' },
  { label: 'Online Media', value: 856, change: 22.1, icon: 'globe' },
  { label: 'Print Media', value: 124, change: -3.2, icon: 'book-open' },
  { label: 'Television', value: 89, change: 8.5, icon: 'tv' },
  { label: 'Radio', value: 45, change: 2.1, icon: 'radio' },
  { label: 'Social Media', value: 3420, change: 35.4, icon: 'share-2' },
  { label: 'Influencer Mention', value: 156, change: 42.0, icon: 'user-check' },
  { label: 'Estimated Audience', value: '4.2M', change: 12.8, icon: 'users' },
  { label: 'Media Reach', value: '2.4M', change: 15.6, icon: 'megaphone' },
  { label: 'Total Engagement', value: '89K', change: 28.3, icon: 'heart' },
];

export const chartData = {
  daily: [
    { name: 'Sen', news: 42, sentiment: 72 },
    { name: 'Sel', news: 38, sentiment: 68 },
    { name: 'Rab', news: 55, sentiment: 75 },
    { name: 'Kam', news: 47, sentiment: 71 },
    { name: 'Jum', news: 62, sentiment: 78 },
    { name: 'Sab', news: 28, sentiment: 65 },
    { name: 'Min', news: 22, sentiment: 70 },
  ],
  mediaDistribution: [
    { name: 'Online', value: 45 },
    { name: 'TV', value: 18 },
    { name: 'Print', value: 12 },
    { name: 'Radio', value: 8 },
    { name: 'Social', value: 17 },
  ],
  shareOfVoice: [
    { name: 'Bank Sumut', value: 34 },
    { name: 'Bank Mandiri', value: 22 },
    { name: 'BCA', value: 18 },
    { name: 'BNI', value: 14 },
    { name: 'Lainnya', value: 12 },
  ],
};

export const issues: IssueItem[] = [
  { issue: 'Transformasi Digital Banking', category: 'Technology', severity: 'Low', owner: 'Div. IT', media: 'Kompas, Detik', mention: 245, trend: 'up', status: 'Monitoring', sla: '24h', lastUpdate: '2 Jul 09:30' },
  { issue: 'Program CSR UMKM', category: 'CSR', severity: 'Low', owner: 'Div. CSR', media: 'Antara, Waspada', mention: 189, trend: 'up', status: 'Monitoring', sla: '48h', lastUpdate: '2 Jul 08:45' },
  { issue: 'Kebijakan Suku Bunga', category: 'Financial', severity: 'Medium', owner: 'Div. Treasury', media: 'Bisnis Indonesia', mention: 78, trend: 'stable', status: 'Investigating', sla: '12h', lastUpdate: '1 Jul 16:20' },
  { issue: 'Isu Layanan Nasabah', category: 'Service', severity: 'Medium', owner: 'Div. Operasional', media: 'Twitter/X', mention: 34, trend: 'down', status: 'Resolved', sla: '6h', lastUpdate: '1 Jul 14:00' },
  { issue: 'Rumor Merger BPD', category: 'Corporate', severity: 'High', owner: 'Sekretaris Perusahaan', media: 'Kontan', mention: 12, trend: 'down', status: 'Escalated', sla: '4h', lastUpdate: '2 Jul 07:15' },
];

export const pressReleases: PressRelease[] = [
  { id: 'pr1', title: 'Bank Sumut Umumkan Laporan Keuangan Kuartal II 2026', date: '2 Jul 2026', summary: 'Laba bersih tumbuh 15,2% dibanding periode yang sama tahun lalu.', category: 'Financial', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80' },
  { id: 'pr2', title: 'Penandatanganan MoU dengan Pemprov Sumatera Utara', date: '1 Jul 2026', summary: 'Kerja sama pembiayaan infrastruktur daerah senilai Rp 2 triliun.', category: 'Partnership', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80' },
  { id: 'pr3', title: 'Peluncuran Program Green Banking Bank Sumut', date: '30 Jun 2026', summary: 'Inisiatif perbankan berkelanjutan untuk mendukung agenda ESG.', category: 'ESG', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80' },
  { id: 'pr4', title: 'Bank Sumut Buka Kantor Cabang Baru di Padang Sidempuan', date: '28 Jun 2026', summary: 'Ekspansi jaringan layanan ke wilayah Tapanuli Selatan.', category: 'Expansion', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80' },
];

export const mediaPartners: MediaPartner[] = [
  { name: 'Kompas', logo: 'K', coverage: 156, lastPublication: '2 Jul 2026', relationshipScore: 95, pic: 'Budi Santoso' },
  { name: 'Tempo', logo: 'T', coverage: 89, lastPublication: '30 Jun 2026', relationshipScore: 88, pic: 'Siti Rahayu' },
  { name: 'Antara', logo: 'A', coverage: 124, lastPublication: '2 Jul 2026', relationshipScore: 92, pic: 'Ahmad Fauzi' },
  { name: 'Detik', logo: 'D', coverage: 98, lastPublication: '1 Jul 2026', relationshipScore: 85, pic: 'Dewi Lestari' },
  { name: 'CNBC Indonesia', logo: 'CN', coverage: 67, lastPublication: '2 Jul 2026', relationshipScore: 90, pic: 'Rizki Pratama' },
  { name: 'Bisnis Indonesia', logo: 'BI', coverage: 112, lastPublication: '2 Jul 2026', relationshipScore: 93, pic: 'Maya Sari' },
  { name: 'Kontan', logo: 'Ko', coverage: 78, lastPublication: '29 Jun 2026', relationshipScore: 87, pic: 'Hendra Wijaya' },
  { name: 'Tribun', logo: 'Tr', coverage: 95, lastPublication: '28 Jun 2026', relationshipScore: 82, pic: 'Fitriani' },
  { name: 'Analisa', logo: 'An', coverage: 45, lastPublication: '28 Jun 2026', relationshipScore: 80, pic: 'Joko Susilo' },
  { name: 'Waspada', logo: 'W', coverage: 134, lastPublication: '2 Jul 2026', relationshipScore: 96, pic: 'Nurhalimah' },
  { name: 'Medan Bisnis', logo: 'MB', coverage: 67, lastPublication: '29 Jun 2026', relationshipScore: 94, pic: 'Teguh Prasetyo' },
];

export const corporatePrograms = [
  { title: 'CSR', desc: 'Program tanggung jawab sosial perusahaan', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80' },
  { title: 'Literasi Keuangan', desc: 'Edukasi keuangan untuk masyarakat', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80' },
  { title: 'Digital Banking', desc: 'Transformasi layanan perbankan digital', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80' },
  { title: 'ESG Program', desc: 'Environmental, Social & Governance', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80' },
  { title: 'Sustainability', desc: 'Komitmen keberlanjutan bisnis', image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80' },
  { title: 'Investor Relation', desc: 'Hubungan dengan pemangku kepentingan', image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80' },
  { title: 'Public Relation Campaign', desc: 'Kampanye komunikasi publik', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80' },
  { title: 'Award & Achievement', desc: 'Penghargaan dan prestasi perusahaan', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80' },
  { title: 'Community Engagement', desc: 'Keterlibatan dengan masyarakat', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80' },
];

export const calendarEvents: CalendarEvent[] = [
  { id: 'c1', title: 'Rapat Direksi Bulanan', date: '3 Jul 2026', time: '09:00', type: 'Agenda Direksi' },
  { id: 'c2', title: 'Press Conference Kuartal II', date: '5 Jul 2026', time: '10:00', type: 'Press Conference' },
  { id: 'c3', title: 'Media Visit Kantor Pusat', date: '8 Jul 2026', time: '14:00', type: 'Media Visit' },
  { id: 'c4', title: 'Public Expose 2026', date: '12 Jul 2026', time: '09:30', type: 'Public Expose' },
  { id: 'c5', title: 'Investor Meeting', date: '15 Jul 2026', time: '13:00', type: 'Investor Meeting' },
  { id: 'c6', title: 'CSR Activity - Desa Binaan', date: '18 Jul 2026', time: '08:00', type: 'CSR Activity' },
  { id: 'c7', title: 'Corporate Event - Anniversary', date: '22 Jul 2026', time: '18:00', type: 'Corporate Event' },
  { id: 'c8', title: 'Review Media Monitoring', date: '25 Jul 2026', time: '10:00', type: 'Agenda Corporate Secretary' },
];

export const documents = [
  { title: 'Annual Report', icon: 'file-bar-chart', count: 12 },
  { title: 'Sustainability Report', icon: 'leaf', count: 8 },
  { title: 'Company Profile', icon: 'building', count: 5 },
  { title: 'Press Kit', icon: 'folder', count: 24 },
  { title: 'Corporate Presentation', icon: 'presentation', count: 18 },
  { title: 'Brand Guideline', icon: 'palette', count: 3 },
  { title: 'Logo Asset', icon: 'image', count: 45 },
  { title: 'GCG Report', icon: 'shield', count: 10 },
  { title: 'Financial Report', icon: 'calculator', count: 36 },
  { title: 'ESG Report', icon: 'globe', count: 6 },
];

export const knowledgeItems = [
  { title: 'Communication Guideline', desc: 'Panduan komunikasi korporat resmi' },
  { title: 'Crisis Communication SOP', desc: 'Prosedur komunikasi krisis' },
  { title: 'Branding Guideline', desc: 'Pedoman identitas visual merek' },
  { title: 'FAQ Media', desc: 'Pertanyaan umum untuk media' },
  { title: 'Public Information', desc: 'Informasi publik perusahaan' },
  { title: 'Documentation Archive', desc: 'Arsip dokumen historis' },
  { title: 'Corporate Identity Manual', desc: 'Manual identitas korporat lengkap' },
];

export const sidebarItems = {
  agenda: [
    { title: 'Rapat Koordinasi PR', time: '10:00' },
    { title: 'Review Media Clipping', time: '14:00' },
    { title: 'Briefing Direksi', time: '16:30' },
  ],
  pressSchedule: [
    { title: 'Press Conference Q2', date: '5 Jul' },
    { title: 'Media Interview CEO', date: '10 Jul' },
  ],
  announcements: [
    'Pengumuman RUPS Tahunan 2026',
    'Update Kebijakan Dividen',
    'Peluncuran Mobile Banking v3.0',
  ],
  topMedia: ['Kompas', 'Waspada', 'Antara', 'Bisnis Indonesia', 'Detik'],
  trendingIssues: ['Digital Banking', 'CSR UMKM', 'Transformasi Digital', 'Green Banking'],
  crisisAlerts: [{ level: 'Low', message: 'Tidak ada isu krisis aktif' }],
  emergencyContact: { name: 'Corporate Secretary', phone: '+62 61 451 5000', email: 'sekretaris@banksumut.co.id' },
};
