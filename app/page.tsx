"use client"

import { useState, useEffect, useCallback } from "react"
import { X } from "lucide-react"
import {
  IconArrowRight,
  IconMail,
  IconMapPin,
  IconPhone,
  IconTool,
  IconPackage,
  IconDimensions,
  IconFileDescription,
  IconChecklist,
  IconSearch,
  IconBuildingFactory,
  IconChisel,
} from "@tabler/icons-react"

const clientLogos = [
  { name: "Acme", src: "/images/Acme.svg" },
  { name: "MEDSNAP", src: "/images/MEDSNAP.svg" },
  { name: "Solution3dl", src: "/images/Solution3dl.svg" },
  { name: "Tole Domtec", src: "/images/Tole Domtec.svg" },
  { name: "Canam", src: "/images/canam.svg" },
  { name: "Mecanium", src: "/images/mecanium.svg" },
]

const featuredProjects = [
  {
    title: "Outillage de matriçage progressif",
    category: "Transformation métal",
    image: "/realisations/matricage - matrice progressive.png",
  },
  {
    title: "Convoyeur automatisé",
    category: "Manutention",
    image: "/realisations/convoyeur automatise - manutention.jpg",
  },
  {
    title: "Main de préhension",
    category: "Manutention",
    image: "/realisations/main-de-prehension.png",
  },
  {
    title: "Conception de cartonneuse",
    category: "Conception mécanique",
    image: "/realisations/conception-cartonneuse.jpg",
  },
  {
    title: "Raft plate de roll former",
    category: "Roll forming",
    image: "/realisations/roll forming- raft plate de roll former.png",
  },
  {
    title: "Cage barrière de protection modulaire",
    category: "Sécurité industrielle",
    image: "/realisations/securite- cage barriere de protection modulaire.png",
  },
]

// No "Contact" — we have the CTA pill for that
const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
]

const serviceItems = [
  {
    icon: <IconDimensions size={20} stroke={1.5} className="text-primary" />,
    title: "Conception 3D",
    desc: "Modélisation précise de vos projets avec SolidWorks et autres logiciels de CAO de pointe.",
  },
  {
    icon: <IconFileDescription size={20} stroke={1.5} className="text-primary" />,
    title: "Mise en plan",
    desc: "Documentation technique complète et plans de fabrication détaillés pour vos pièces.",
  },
  {
    icon: <IconChecklist size={20} stroke={1.5} className="text-primary" />,
    title: "Suivi de projet",
    desc: "Gestion complète de votre projet de la conception initiale jusqu'à la livraison finale.",
  },
  {
    icon: <IconSearch size={20} stroke={1.5} className="text-primary" />,
    title: "Recherche de fournisseurs",
    desc: "Identification et sélection des meilleurs partenaires manufacturiers pour votre projet.",
  },
  {
    icon: <IconBuildingFactory size={20} stroke={1.5} className="text-primary" />,
    title: "Agent manufacturier",
    desc: "Liaison directe entre votre entreprise et les fabricants pour une production optimale.",
  },
  {
    icon: <IconChisel size={20} stroke={1.5} className="text-primary" />,
    title: "Poinçons et matrices",
    desc: "Conception spécialisée d'outillages pour la transformation du métal à froid.",
  },
]

export default function Home() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const activeProject = activeProjectIndex !== null ? featuredProjects[activeProjectIndex] : null

  const prev = useCallback(() => {
    setActiveProjectIndex((i) => i !== null ? (i - 1 + featuredProjects.length) % featuredProjects.length : null)
  }, [])

  const next = useCallback(() => {
    setActiveProjectIndex((i) => i !== null ? (i + 1) % featuredProjects.length : null)
  }, [])

  useEffect(() => {
    if (activeProjectIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      else if (e.key === "ArrowRight") next()
      else if (e.key === "Escape") setActiveProjectIndex(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeProjectIndex, prev, next])

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ─────────────────────────────────────────────────────
          NAV  —  full-width bar with individual button links
          Desktop: [logo pill]  [Accueil] [À propos] [Services] [Réalisations]  [Contactez-nous pill]
          Mobile:  [logo pill][hamburger pill]  ← connected, no gap
      ───────────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-[66px]">

            {/* ── Desktop logo — plain, no pill ── */}
            <a href="#accueil" className="hidden md:flex items-center flex-shrink-0">
              <img src="/logo.svg" alt="EMB Conception" className="h-6 w-auto" />
            </a>

            {/* ── Mobile: logo plain left, hamburger pill right ── */}
            <a href="#accueil" className="md:hidden flex items-center">
              <img src="/logo.svg" alt="EMB Conception" className="h-6 w-auto" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="md:hidden flex items-center justify-center w-10 h-10 bg-primary rounded-lg"
            >
              <span className="flex flex-col gap-[4px] items-center">
                <span className="block h-px w-4 bg-white rounded-full" />
                <span className="block h-px w-[11px] bg-white/70 rounded-full" />
                <span className="block h-px w-4 bg-white rounded-full" />
              </span>
            </button>

            {/* ── Desktop center: nav buttons expand to fill all available space ── */}
            <div className="hidden md:flex items-center flex-1 mx-6">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex-1 h-9 flex items-center justify-center text-[14px] text-white/52 hover:text-white/90 hover:bg-white/[0.07] rounded-lg transition-all whitespace-nowrap"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* ── Desktop right: CTA ── */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-1.5 h-9 px-5 bg-primary text-white text-[14px] font-medium rounded-lg hover:bg-[#c8001f] transition-colors whitespace-nowrap flex-shrink-0"
            >
              Contactez-nous
              <IconArrowRight size={13} stroke={2} />
            </a>

          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[80] bg-[#0a0a0a] flex flex-col">
          <div className="flex items-center justify-between h-[66px] px-5 border-b border-white/[0.05]">
            <img src="/logo.svg" alt="EMB Conception" className="h-6 w-auto" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
              className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg"
            >
              <X className="h-4 w-4 text-white" strokeWidth={2} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-5 text-[clamp(1.8rem,7vw,2.5rem)] font-light tracking-[-0.04em] text-white/60 hover:text-white border-b border-white/[0.05] transition-colors"
              >
                {label}
                <IconArrowRight size={20} stroke={1} className="text-white/18" />
              </a>
            ))}
          </nav>

          <div className="px-8 pb-10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full h-14 bg-primary text-white rounded-lg font-medium text-[16px]"
            >
              Contactez-nous
              <IconArrowRight size={16} stroke={1.5} />
            </a>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="accueil" className="hero-bg relative overflow-hidden px-6 pb-24 pt-[110px] lg:px-8 lg:pb-28 lg:pt-[120px]">
        <div className="hero-visual absolute inset-y-0 right-0 left-[48%] hidden lg:block xl:left-[38%]">
          <div className="hero-machine-wrap absolute top-[44px] bottom-8 right-[-10%] w-[58vw] min-w-[780px] max-w-[940px] xl:right-[0%] xl:w-[56vw] xl:min-w-[760px] xl:max-w-[980px]">
            <img
              src="/hero2.png"
              alt="Équipement industriel"
              className="hero-machine h-full w-full object-contain object-top image-hover"
            />
          </div>
        </div>

        <div className="absolute right-[-28%] top-[44px] z-0 h-[74vh] w-[118vw] pointer-events-none sm:right-[-14%] sm:h-[62vh] sm:w-[88vw] lg:hidden">
          <img
            src="/hero2.png"
            alt="Équipement industriel"
            className="hero-machine-mobile h-full w-full object-contain object-top"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="min-h-[540px] lg:min-h-[600px] flex items-center">
            <div className="space-y-8 max-w-3xl lg:max-w-2xl xl:max-w-3xl">
              <p className="eyebrow">Conception industrielle</p>
              <h1 className="max-w-[11ch] text-[clamp(3rem,11vw,5.6rem)] font-light leading-[0.95] tracking-[-0.04em] text-balance">
                <span className="text-white/92">Conception mécanique de </span>
                <span className="text-gradient-red">précision</span>
              </h1>
              <p className="max-w-[28ch] text-[16px] leading-[1.7] text-white/62 lg:max-w-lg lg:text-[17px]">
                Expert en transformation du métal à froid et systèmes de manutention. Solutions sur mesure pour vos
                projets industriels les plus exigeants.
              </p>
              <a href="#realisations" className="btn-ghost inline-flex items-center gap-2 relative z-10">
                Voir nos réalisations
                <IconArrowRight size={15} stroke={1.5} />
              </a>
            </div>
          </div>

          {/* Hero feature cards */}
          <div className="grid md:grid-cols-2 gap-3 mt-20">
            <div className="group bg-[#111113] rounded-2xl p-7 border border-white/[0.04] hover:border-white/[0.12] hover:bg-[#131313] transition-all cursor-default">
              <IconTool size={30} stroke={1.3} className="text-primary mb-5" />
              <h3 className="text-[1.05rem] font-medium mb-4 tracking-[-0.02em] text-white/85 group-hover:text-white transition-colors">
                Transformation du métal à froid
              </h3>
              <ul className="space-y-2.5">
                {["Outillages spécialisés", "Matriçage haute précision", "Roll Forming"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg width="7" height="7" viewBox="0 0 10 9" fill="none" className="flex-shrink-0 opacity-75 rotate-[270deg]">
                      <path d="M5 8.5L0.5 0.5H9.5L5 8.5Z" fill="#CE2130" />
                    </svg>
                    <span className="text-white/58 text-[14px] group-hover:text-white/72 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group bg-[#111113] rounded-2xl p-7 border border-white/[0.04] hover:border-white/[0.12] hover:bg-[#131313] transition-all cursor-default">
              <IconPackage size={30} stroke={1.3} className="text-primary mb-5" />
              <h3 className="text-[1.05rem] font-medium mb-4 tracking-[-0.02em] text-white/85 group-hover:text-white transition-colors">
                Manutention de matériel
              </h3>
              <ul className="space-y-2.5">
                {["Systèmes de convoyeurs", "Cartonneurs industriels", "Solutions automatisées"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg width="7" height="7" viewBox="0 0 10 9" fill="none" className="flex-shrink-0 opacity-75 rotate-[270deg]">
                      <path d="M5 8.5L0.5 0.5H9.5L5 8.5Z" fill="#CE2130" />
                    </svg>
                    <span className="text-white/58 text-[14px] group-hover:text-white/72 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section className="py-12 px-6 lg:px-8 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto flex flex-col gap-7">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/42 font-medium">Ils nous font confiance</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center px-4 py-3" aria-label={logo.name}>
                <img src={logo.src} alt={logo.name} className="logo-mark h-8 w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="apropos" className="py-36 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
            <div className="space-y-5 lg:sticky lg:top-28">
              <p className="eyebrow">Notre histoire</p>
              <h2 className="text-[clamp(2.4rem,4.8vw,3.8rem)] font-light tracking-[-0.04em] leading-[1.06]">
                L'excellence par l'expérience
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-[1.8] text-white/62">
              <p>
                Forte de plusieurs années d'expérience dans le domaine de la conception mécanique, notre entreprise
                s'est forgée une réputation d'excellence dans les secteurs de la transformation du métal à froid et de
                la manutention industrielle.
              </p>
              <p>
                Nos débuts modestes nous ont appris l'importance de la précision, de l'innovation et du service client
                exceptionnel. Aujourd'hui, nous mettons cette expertise au service de vos projets les plus ambitieux.
              </p>
              <p>
                Spécialisés dans les solutions sur mesure, nous accompagnons nos clients de la conception initiale
                jusqu'à la réalisation finale, en passant par la recherche de fournisseurs et le suivi de projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — numbered rows with dividers ── */}
      <section id="services" className="py-36 px-6 lg:px-8 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <p className="eyebrow">Expertise</p>
              <h2 className="text-[clamp(2.4rem,4.8vw,3.8rem)] font-light tracking-[-0.04em] leading-[1.06]">
                Nos services
              </h2>
            </div>
            <p className="text-white/50 text-[15px] leading-[1.7] max-w-[36ch] lg:text-right">
              Du concept à la livraison — une gamme complète pour vos projets les plus exigeants.
            </p>
          </div>

          <div className="border-t border-white/[0.07]">
            {serviceItems.map((service, i) => (
              <div
                key={i}
                className="group flex items-center gap-6 lg:gap-10 py-6 border-b border-white/[0.06] hover:bg-[#131313] -mx-4 px-4 rounded-xl transition-colors"
              >
                {/* Icon */}
                <div className="h-10 w-10 rounded-xl bg-[#111113] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a1a1a] transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-medium text-white/72 group-hover:text-white/90 transition-colors w-44 lg:w-52 flex-shrink-0">
                  {service.title}
                </h3>

                {/* Desc — desktop only */}
                <p className="hidden lg:block text-white/48 text-[14px] leading-[1.65] flex-1 min-w-0">
                  {service.desc}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="realisations" className="py-36 px-6 lg:px-8 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 space-y-4">
            <p className="eyebrow">Portfolio</p>
            <h2 className="text-[clamp(2.4rem,4.8vw,3.8rem)] font-light tracking-[-0.04em] leading-[1.06]">
              Nos réalisations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className="bg-[#111113] rounded-2xl overflow-hidden group cursor-pointer hover:bg-[#181818] transition-colors"
                onClick={() => setActiveProjectIndex(i)}
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04]" style={{ transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)" }}
                  />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-medium text-primary mb-1.5 tracking-[0.12em] uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-[15px] font-medium tracking-[-0.01em] text-white/75 group-hover:text-white/95 leading-snug transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX / CAROUSEL ── */}
      {activeProject ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setActiveProjectIndex(null)}
        >
          {/* Close */}
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setActiveProjectIndex(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
          >
            <X className="h-4 w-4" strokeWidth={1.8} />
          </button>

          {/* Image + caption */}
          <div
            className="flex flex-col items-center gap-0 max-w-[min(92vw,1200px)] w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full overflow-hidden rounded-t-2xl border border-b-0 border-white/[0.08]">
              {/* Prev */}
              <button
                type="button"
                aria-label="Précédent"
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
              >
                <IconArrowRight size={18} stroke={2} className="rotate-180" />
              </button>

              {/* Next */}
              <button
                type="button"
                aria-label="Suivant"
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white hover:bg-black/80 transition-colors z-10"
              >
                <IconArrowRight size={18} stroke={2} />
              </button>
              <img
                key={activeProject.image}
                src={activeProject.image}
                alt={activeProject.title}
                className="max-h-[75vh] w-full object-contain bg-[#0d0d0d]"
              />
            </div>
            {/* Caption bar */}
            <div className="w-full flex items-center justify-between px-5 py-4 bg-[#111113] rounded-b-2xl border border-t-0 border-white/[0.08]">
              <div>
                <p className="text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-0.5">
                  {activeProject.category}
                </p>
                <h3 className="text-[15px] font-medium text-white/85 tracking-[-0.01em]">
                  {activeProject.title}
                </h3>
              </div>
              <p className="text-[12px] text-white/28 tabular-nums">
                {(activeProjectIndex! + 1)}&thinsp;/&thinsp;{featuredProjects.length}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* ── CONTACT — hatch background + black rounded card ── */}
      <section id="contact" className="relative overflow-hidden border-t border-white/[0.05] py-24 lg:py-32">
        {/* Hatch texture on the section background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.022) 0, rgba(255,255,255,0.022) 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Black rounded card */}
          <div className="bg-black rounded-3xl px-8 py-14 lg:px-14 lg:py-20 border border-white/[0.07]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: info */}
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="eyebrow">Travaillons ensemble</p>
                <h2 className="text-[clamp(2.4rem,4.8vw,3.8rem)] font-light tracking-[-0.04em] leading-[1.06]">
                  Contactez-nous
                </h2>
                <p className="text-white/62 text-[16px] leading-[1.7] max-w-[34ch]">
                  Notre équipe est là pour vous accompagner dans toutes les étapes de votre conception mécanique.
                  Réponse en moins de 24h.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { Icon: IconPhone, label: "Téléphone", value: "(581) 724-0163", href: "tel:+15817240163" },
                  { Icon: IconMail, label: "Courriel", value: "info@embconception.ca", href: "mailto:info@embconception.ca" },
                  { Icon: IconMapPin, label: "Localisation", value: "Thetford Mines, QC", href: null },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#111113] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} stroke={1.5} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-white/38 font-medium mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white/75 text-[15px] hover:text-white transition-colors">{value}</a>
                      ) : (
                        <p className="text-white/75 text-[15px]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-7 border-t border-white/[0.06]">
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/35 font-medium mb-4">Suivez-nous</p>
                <a
                  href="https://www.linkedin.com/company/emb-conception-inc/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 rounded-lg bg-[#111113] hover:bg-[#13151f] flex items-center justify-center transition-colors"
                >
                  <svg className="h-4 w-4 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: form card */}
            <div className="bg-[#111113] rounded-2xl p-8 lg:p-10 border border-white/[0.06]">
              <h3 className="text-[1.35rem] font-medium mb-7 tracking-[-0.02em] text-white/88">
                Demande de soumission
              </h3>
              <form className="space-y-4">
                {[
                  { label: "Nom complet", type: "text", placeholder: "Jean Dupont" },
                  { label: "Courriel", type: "email", placeholder: "jean@exemple.com" },
                  { label: "Téléphone", type: "tel", placeholder: "(555) 123-4567" },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label className="block text-[11px] uppercase tracking-[0.1em] text-white/38 font-medium mb-1.5">
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[15px] text-white/80 placeholder-white/22 focus:outline-none focus:border-primary/50 transition-colors font-sans"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.1em] text-white/38 font-medium mb-1.5">
                    Type de projet
                  </label>
                  <select className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[15px] text-white/65 focus:outline-none focus:border-primary/50 transition-colors font-sans appearance-none">
                    <option className="bg-[#111113]">Transformation du métal</option>
                    <option className="bg-[#111113]">Manutention</option>
                    <option className="bg-[#111113]">Conception 3D</option>
                    <option className="bg-[#111113]">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.1em] text-white/38 font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Décrivez votre projet..."
                    className="w-full px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[15px] text-white/80 placeholder-white/22 focus:outline-none focus:border-primary/50 transition-colors resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full h-12 bg-primary text-white font-semibold rounded-lg text-[15px] hover:bg-[#c8001f] transition-colors mt-2"
                >
                  Envoyer la demande
                  <IconArrowRight size={16} stroke={2} />
                </button>
              </form>
            </div>

          </div>
          </div>{/* end black rounded card */}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.05] py-9 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
          <img src="/logo.svg" alt="EMB Logo" className="h-6 w-auto" />
          <p className="text-[12px] text-white/20">© 2026 EMB Conception. Tous droits réservés.</p>
          <div className="flex gap-6 text-[12px]">
            <a href="#" className="text-white/20 hover:text-white/55 transition-colors">Confidentialité</a>
            <a href="#" className="text-white/20 hover:text-white/55 transition-colors">Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
