# Ammar Ashim — Portfolio

Portfolio pribadi dengan estetika **Luxury Editorial** dibangun menggunakan Next.js 14.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Fonts**: Plus Jakarta Sans + DM Mono (Google Fonts)
- **Styling**: Pure CSS custom properties
- **Deployment**: Vercel (recommended)

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Setup Foto Profil

1. Siapkan foto kamu (JPG/PNG/WebP, rasio 3:4 disarankan)
2. Rename file menjadi `foto-kamu.jpg`
3. Taruh di folder `public/`

```
portfolio/
└── public/
    └── foto-kamu.jpg   ← taruh di sini
```

Jika foto belum ada, akan otomatis tampil initials **AA** sebagai fallback.

## Setup CV Download

1. Export CV kamu ke format PDF
2. Rename menjadi `cv-ammar-ashim.pdf`
3. Taruh di folder `public/`

```
portfolio/
└── public/
    └── cv-ammar-ashim.pdf   ← taruh di sini
```

## Struktur Folder

```
portfolio/
├── app/
│   ├── layout.tsx       ← Root layout + SEO metadata
│   ├── page.tsx         ← Semua section halaman
│   └── globals.css      ← Design system + styling
├── public/
│   ├── foto-kamu.jpg    ← Foto profil kamu
│   └── cv-ammar-ashim.pdf ← File CV kamu
├── next.config.js
├── tsconfig.json
└── package.json
```

## Kustomisasi Konten

Buka `app/page.tsx` dan edit:
- **SKILLS** — level (0–100) tiap skill
- **PROJECTS** — title, desc, stack, link, warna thumbnail
- Section contact — email, GitHub, Instagram

## Deploy ke Vercel

```bash
npx vercel
```

Atau push ke GitHub → connect di vercel.com → auto deploy.
