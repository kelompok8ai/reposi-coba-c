# Corporate Secretary Portal – PT Bank Sumut

Executive Corporate Communication Intelligence Center untuk Public Relation, Media Monitoring & Corporate Communication.

## Fitur

- **Hero Dashboard** – Ringkasan eksekutif real-time dengan KPI strategis
- **Media Intelligence** – Monitoring dan analisis cakupan media multi-channel
- **Reputation Analytics** – Visualisasi tren reputasi, share of voice, dan distribusi media
- **AI Executive Insight** – Ringkasan intelijen otomatis dan rekomendasi strategis
- **Issue Monitoring** – Pemantauan isu dengan severity, SLA, dan status tracking
- **Sentiment Analysis** – Analisis sentimen positif, netral, dan negatif
- **Press Release Center** – Siaran pers resmi dengan media kit
- **Media Relation Hub** – Jaringan media partner dan relationship scoring
- **Document & Knowledge Center** – Repositori dokumen korporasi dan panduan

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animasi)
- Recharts (visualisasi data)
- Lucide React (ikon)

## Menjalankan

**Penting:** Pastikan Anda berada di branch yang berisi kode landing page.

```bash
git checkout cursor/banksumut-corporate-secretary-landing-f70d
# atau setelah merge: git checkout main
```

```bash
npm install
npm run dev
```

Buka **http://localhost:5173** di browser.

Jika halaman kosong / tidak bisa diakses:

1. Pastikan terminal menampilkan `VITE ready` tanpa error merah
2. Buka URL persis: `http://localhost:5173` (bukan buka file `index.html` langsung)
3. Jika pakai WSL / remote / Codespaces, gunakan URL **Network** yang muncul di terminal (mis. `http://0.0.0.0:5173` atau port forwarding)
4. Coba hard refresh: `Ctrl+Shift+R` (Windows) atau `Cmd+Shift+R` (Mac)
5. Cek browser console (`F12` → Console) untuk error JavaScript

## Build Production

```bash
npm run build
npm run preview
```

## Brand Colors

| Token | Hex |
|-------|-----|
| Primary Blue | `#005BAC` |
| Corporate Navy | `#063970` |
| Gold Accent | `#F4B400` |
| Background | `#F5F7FA` |

---

PT Bank Pembangunan Daerah Sumatera Utara – Corporate Secretary Portal
