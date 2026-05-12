'use client'

import { useEffect, useRef, useState } from 'react'

const SKILLS = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 88 },
  { name: 'Tailwind CSS', level: 82 },
  { name: 'Git & GitHub', level: 78 },
  { name: 'Node.js', level: 70 },
  { name: 'Python', level: 62 },
  { name: 'Astro', level: 58 },
  { name: 'Figma', level: 65 },
]


const EDUCATION = [
  {
    id: '01',
    type: 'online',
    institution: 'Gamelab Indonesia',
    period: '2024 – 2025',
    description: 'Platform pelatihan online berbasis project. Belajar dari dasar hingga siap pakai untuk kebutuhan web development.',
    topics: ['HTML & CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Sass'],
    icon: 'device-laptop',
  },
  {
    id: '02',
    type: 'formal',
    institution: 'SMK Nurul Islam Jakarta',
    period: '2025 – 2026',
    description: 'Pembelajaran berbasis kurikulum SMK dengan fokus pada backend development, database, dan framework modern.',
    topics: ['Python', 'PHP', 'Database', 'XAMPP', 'Laragon', 'Laravel', 'Node.js'],
    icon: 'building-school',
  },
  {
    id: '03',
    type: 'formal',
    institution: 'TEFA SMK Nurul Islam',
    period: '2025 – 2026',
    description: 'Teaching Factory (TEFA) adalah program di SMK di mana siswa belajar sambil langsung mengerjakan produk atau jasa nyata layaknya di dunia industri bukan sekadar simulasi atau latihan biasa.',
    topics: ['Git & GitHub', 'Astro', 'React', 'Tailwind CSS', 'Rest API', 'Next.js'],
    icon: 'building-school',
  },
]

const MARQUEE_SKILLS = [
  'HTML & CSS', 'JavaScript', 'React', 'Astro', 'Python',
  'Git & GitHub', 'Node.js', 'Figma', 'Tailwind CSS',
  'HTML & CSS', 'JavaScript', 'React', 'Astro', 'Python',
  'Git & GitHub', 'Node.js', 'Figma', 'Tailwind CSS',
]

const PROJECTS = [
  {
    id: '01',
    title: 'SIAKAD SMK Nurul Islam',
    subtitle: 'Sistem Akademik Terintegrasi',
    description:
      'Platform digital SMK Nurul Islam Jakarta yang menyatukan Tracer Study Alumni, Manajemen PKL, dan Sistem Inventaris dalam satu ekosistem cerdas. Cloud-based dengan real-time data monitoring.',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Cloud'],
    link: 'https://siakad.smknurisjkt.org/',
    featured: true,
    image: '/project-siakad.png',
    accent: '#16A34A',
  },
  {
    id: '02',
    title: 'Animek',
    subtitle: 'Anime Streaming Platform',
    description:
      'Web streaming anime lengkap dengan subtitle Indonesia. Dibangun dengan React + Vite dan Tailwind CSS untuk pengalaman menonton yang imersif dan mulus di semua perangkat.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://animek-two.vercel.app/',
    featured: false,
    image: '/project-animek.png',
    accent: '#7C6FCD',
  },
  {
    id: '03',
    title: 'Montra',
    subtitle: 'PWA Keuangan Pribadi',
    description:
      'Aplikasi pencatat keuangan berbasis PWA — bisa diinstall seperti aplikasi native. Lacak pemasukan dan pengeluaran dengan tampilan yang bersih dan intuitif.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    link: 'https://montraapp.netlify.app/',
    featured: false,
    image: '/project-montra.png',
    accent: '#4F6EF7',
  },
  {
    id: '04',
    title: 'Code AI',
    subtitle: 'AI-Powered Workspace',
    description:
      'Ruang kerja bertenaga AI yang minimalis untuk mencari jawaban, menghasilkan ide, dan mendapatkan insight. Mengintegrasikan Hugging Face AI dengan antarmuka web yang bersih.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'AI'],
    link: 'https://codeai-six.vercel.app/',
    featured: false,
    image: '/project-codeai.png',
    accent: '#00D4FF',
  },
  {
    id: '05',
    title: 'Keluarga Panahan',
    subtitle: 'Archery Club Landing Page',
    description:
      'Landing page untuk komunitas panahan. Dibangun menggunakan React + Vite dan Tailwind CSS dengan desain yang bersih dan responsif.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    link: '#',
    featured: false,
    image: '/project-panahan.png',
    accent: '#6BAF6B',
  },
]

function ProjectImage({
  src,
  alt,
  accent,
  title,
}: {
  src: string
  alt: string
  accent: string
  title: string
}) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className="proj-thumb-fallback"
        style={{ borderBottom: `2px solid ${accent}20` }}
      >
        <span className="proj-fallback-label" style={{ color: accent }}>
          {title}
        </span>
        <span className="proj-fallback-sub">screenshot belum tersedia</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="proj-img"
      onError={() => setError(true)}
    />
  )
}

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const [cursorHover, setCursorHover] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      if (cursorRingRef.current) {
        setTimeout(() => {
          if (cursorRingRef.current) {
            cursorRingRef.current.style.left = e.clientX + 'px'
            cursorRingRef.current.style.top = e.clientY + 'px'
          }
        }, 80)
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const hover = {
    onMouseEnter: () => setCursorHover(true),
    onMouseLeave: () => setCursorHover(false),
  }

  return (
    <>
      <div ref={cursorRef} className={`cursor-dot${cursorHover ? ' hover' : ''}`} />
      <div ref={cursorRingRef} className={`cursor-ring${cursorHover ? ' hover' : ''}`} />

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo" {...hover}>
          AMMAR<span className="dot">.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about" {...hover}>About</a></li>
          <li><a href="#skills" {...hover}>Skills</a></li>
          <li><a href="#education" {...hover}>Education</a></li>
          <li><a href="#projects" {...hover}>Work</a></li>
          <li><a href="#contact" {...hover}>Contact</a></li>
        </ul>
        <a href="/cv-ammar-ashim.pdf" download className="nav-cta" {...hover}>
          Download CV
        </a>
        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-line" />
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="mobile-menu-line" />
          <a href="/cv-ammar-ashim.pdf" download className="mobile-cta" onClick={() => setMenuOpen(false)}>
            ↓ Download CV
          </a>
        </div>
      )}

      {/* HERO */}
      <section id="hero">
        <div className="hero-texture" />
        <div className="hero-grid" />
        <div className="hero-line" />
        <div className="hero-year">Est. 2024</div>

        <div className="availability reveal">
          <span className="avail-dot" />
          <span>Open for opportunities</span>
          <span className="avail-sep">·</span>
          <span className="avail-sub">Freelance · Kolaborasi · Internship</span>
        </div>

        <p className="hero-eyebrow reveal delay-1">Frontend / Fullstack Developer</p>

        <h1 className="hero-title">
          <span className="line-wrap reveal delay-1"><span className="line">Berproses,</span></span>
          <span className="line-wrap reveal delay-2"><span className="line"><em>belajar,</em></span></span>
          <span className="line-wrap reveal delay-3"><span className="line">berkembang.</span></span>
        </h1>

        <div className="hero-sub reveal delay-4">
          <p className="hero-desc">
            Ammar Ashim Hadi — siswa yang menciptakan hal-hal baru dari setiap proses yang dijalani.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary" {...hover}>Lihat Karya</a>
            <a href="/cv-ammar-ashim.pdf" download className="btn-secondary" {...hover}>
              ↓ Download CV
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {MARQUEE_SKILLS.map((s, i) => (
            <span key={i} className="marquee-item">{s}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="about-photo-col reveal">
          <div className="about-photo-wrap">
            <img
              src="/foto-kamu.jpg"
              alt="Ammar Ashim"
              className="about-photo"
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = 'none'
                const fallback = target.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <div className="about-initials" style={{ display: 'none' }}>
              <span>AA</span>
            </div>
            <div className="about-photo-badge">
              <span className="avail-dot small" />
              <span>Available</span>
            </div>
          </div>
        </div>

        <div className="about-content reveal delay-1">
          <p className="section-label">— Tentang Saya</p>
          <h2 className="about-heading">
            Setiap pengalaman<br />adalah <em>pelajaran</em><br />berharga.
          </h2>
          <p className="about-body">
            Saya adalah seorang siswa yang memiliki ketertarikan dalam menciptakan
            hal-hal baru dan terus belajar dari setiap proses yang saya jalani.
            Saya percaya bahwa setiap pengalaman, baik kecil maupun besar, adalah
            bagian penting dalam membentuk kemampuan dan pola pikir saya ke depan.
          </p>
          <p className="about-body mt">
            Saya menikmati proses mengembangkan ide menjadi sesuatu yang nyata dan
            bermanfaat. Bagi saya, belajar bukan hanya tentang memahami teori —
            tetapi tentang mencoba, gagal, dan terus berkembang menjadi versi diri
            yang lebih baik.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-num">9</span>
              <span className="stat-label">Skills</span>
            </div>
            <div className="stat">
              <span className="stat-num">∞</span>
              <span className="stat-label">Semangat</span>
            </div>
          </div>
          <a href="/cv-ammar-ashim.pdf" download className="cv-btn" {...hover}>
            ↓ Download CV
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="skills-header reveal">
          <p className="section-label">— Tech Stack</p>
          <h2 className="section-heading">Kemampuan teknis</h2>
        </div>
        <div className="skills-grid reveal delay-1">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ '--skill-w': `${skill.level}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="edu-header reveal">
          <p className="section-label">— Education</p>
          <h2 className="section-heading">Perjalanan belajar</h2>
        </div>
        <div className="edu-grid">
          {EDUCATION.map((edu, i) => (
            <div key={edu.id} className={`edu-card reveal${i === 1 ? ' delay-1' : ''}`}>
              <div className="edu-card-header">
                <span className="edu-id">{edu.id}</span>
                <div className="edu-meta">
                  <span className="edu-period">{edu.period}</span>
                  <span className={`edu-type-badge ${edu.type}`}>
                    {edu.type === 'online' ? 'Online' : 'Formal'}
                  </span>
                </div>
              </div>
              <h3 className="edu-institution">{edu.institution}</h3>
              <p className="edu-desc">{edu.description}</p>
              <div className="edu-topics">
                {edu.topics.map((topic) => (
                  <span key={topic} className={`edu-tag ${edu.type}`}>{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="projects-header reveal">
          <p className="section-label">— Selected Work</p>
          <h2 className="section-heading">Karya terpilih</h2>
        </div>

        <div className="projects-grid">
          {/* Featured */}
          {PROJECTS.filter((p) => p.featured).map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-featured reveal"
              {...hover}
            >
              {/* Screenshot thumbnail */}
              <div className="proj-thumb">
                <ProjectImage src={p.image} alt={p.title} accent={p.accent} title={p.title} />
                <div className="proj-thumb-overlay">
                  <span className="proj-arrow">↗</span>
                </div>
              </div>
              <div className="proj-body">
                <span className="project-num">{p.id}</span>
                <p className="project-subtitle">{p.subtitle}</p>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="stack-row">
                  {p.stack.map((s) => <span key={s} className="stack-tag">{s}</span>)}
                </div>
              </div>
            </a>
          ))}

          {/* Small cards */}
          <div className="projects-small">
            {PROJECTS.filter((p) => !p.featured).map((p, i) => (
              <a
                key={p.id}
                href={p.link !== '#' ? p.link : undefined}
                target={p.link !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`project-card reveal${i === 1 ? ' delay-1' : ''}`}
                {...hover}
              >
                <div className="proj-thumb-sm">
                  <ProjectImage src={p.image} alt={p.title} accent={p.accent} title={p.title} />
                  <div className="proj-thumb-overlay">
                    {p.link !== '#' && <span className="proj-arrow">↗</span>}
                  </div>
                </div>
                <div className="proj-body">
                  <span className="project-num">{p.id}</span>
                  <p className="project-subtitle">{p.subtitle}</p>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="stack-row">
                    {p.stack.map((s) => <span key={s} className="stack-tag">{s}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner reveal">
          <p className="section-label"> Get in Touch</p>
          <h2 className="contact-heading">
            Mari buat sesuatu<br /><em>bersama.</em>
          </h2>
          <div className="avail-badge-lg">
            <span className="avail-dot" />
            <span>Open for opportunities — Freelance · Kolaborasi · Internship</span>
          </div>
          <a href="mailto:ammarashim18@gmail.com" className="contact-email" {...hover}>
            ammarashim18@gmail.com
          </a>
          <div className="contact-socials">
            <a href="https://github.com/renntie" target="_blank" rel="noopener noreferrer" {...hover}>GitHub</a>
            <span>·</span>
            <a href="https://instagram.com/wakeupmarz" target="_blank" rel="noopener noreferrer" {...hover}>Instagram</a>
            <span>·</span>
            <a href="/cv-ammar-ashim.pdf" download {...hover}>Download CV ↓</a>
          </div>
        </div>
        <footer>
          <span>© 2024 Ammar Ashim</span>
        </footer>
      </section>
    </>
  )
}
