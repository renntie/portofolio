import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ammar Ashim — Frontend / Fullstack Developer',
  description:
    'Portfolio of Ammar Ashim — siswa yang memiliki ketertarikan dalam menciptakan hal-hal baru dan terus belajar dari setiap proses.',
  keywords: ['Ammar Ashim', 'Frontend Developer', 'Fullstack', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Ammar Ashim' }],
  openGraph: {
    title: 'Ammar Ashim — Frontend / Fullstack Developer',
    description: 'Berproses, belajar, berkembang.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
