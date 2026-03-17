"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Wrench, Package, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export default function Home() {
  const [activeProjectImage, setActiveProjectImage] = useState<(typeof featuredProjects)[number] | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Removing SVG filter that caused grainy texture issues */}

      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2.5">
              <img src="/logo.svg" alt="EMB Logo" className="h-9 w-auto" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#accueil"
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Accueil
              </a>
              <a
                href="#apropos"
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                À propos
              </a>
              <a
                href="#services"
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#realisations"
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Réalisations
              </a>
              <a
                href="#contact"
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="accueil" className="hero-bg relative overflow-hidden px-6 pb-20 pt-32 lg:px-8 lg:pb-24">
        <div className="hero-visual absolute inset-y-0 right-0 left-[48%] hidden lg:block xl:left-[38%]">
          <div className="hero-machine-wrap absolute top-[44px] bottom-8 right-[-10%] w-[58vw] min-w-[780px] max-w-[940px] xl:right-[0%] xl:w-[56vw] xl:min-w-[760px] xl:max-w-[980px]">
            <img
              src="/hero2.png"
              alt="Équipement industriel"
              className="hero-machine h-full w-full object-contain object-top image-hover"
            />
          </div>
        </div>

        <div className="absolute right-[-28%] top-[44px] z-0 h-[74vh] w-[118vw] pointer-events-none sm:right-[-14%] sm:top-[44px] sm:h-[62vh] sm:w-[88vw] lg:hidden">
          <img
            src="/hero2.png"
            alt="Équipement industriel"
            className="hero-machine-mobile h-full w-full object-contain object-top"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="min-h-[560px] lg:min-h-[620px] flex items-center">
            <div className="space-y-8 max-w-3xl lg:max-w-2xl xl:max-w-3xl">
              <h1
                className="max-w-[11ch] text-[clamp(3.9rem,15vw,5.25rem)] lg:max-w-none lg:text-[80px] font-bold leading-[0.9] tracking-[-0.05em] text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-clean">Conception mécanique de </span>
                {/* Using simpler gradient class without grainy effect */}
                <span className="text-gradient-red">précision</span>
              </h1>
              <p className="max-w-[21ch] text-[17px] leading-[1.55] text-foreground/72 lg:max-w-lg lg:text-[18px] xl:max-w-xl">
                Expert en transformation du métal à froid et systèmes de manutention. Solutions sur mesure pour vos
                projets industriels les plus exigeants.
              </p>
              <Button className="btn-premium bg-primary hover:bg-primary/90 text-primary-foreground group h-12 text-[15px] font-semibold">
                Démarrer un projet
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-32">
            <div className="glass-card rounded-lg p-10 group gradient-border-hover">
              <Wrench className="h-12 w-12 text-primary mb-6" strokeWidth={1.2} />
              <h3 className="text-3xl font-bold mb-5 tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
                Transformation du métal à froid
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-muted-foreground text-[16px] leading-[1.6]">Outillages spécialisés</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-muted-foreground text-[16px] leading-[1.6]">Matriçage haute précision</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-muted-foreground text-[16px] leading-[1.6]">Roll Forming</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-lg p-10 group gradient-border-hover">
              <Package className="h-12 w-12 text-primary mb-6" strokeWidth={1.2} />
              <h3 className="text-3xl font-bold mb-5 tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
                Manutention de matériel
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-muted-foreground text-[16px] leading-[1.6]">Systèmes de convoyeurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-muted-foreground text-[16px] leading-[1.6]">Cartonneurs industriels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-muted-foreground text-[16px] leading-[1.6]">Solutions automatisées</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 border-b border-border/40">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ils nous font confiance</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="logo-tile flex items-center justify-center px-6 py-4"
                aria-label={logo.name}
              >
                <img src={logo.src} alt={logo.name} className="logo-mark h-10 w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apropos" className="py-40 px-6 lg:px-8 bg-secondary/30 relative section-divider">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="space-y-8">
              <h2
                className="text-6xl font-bold tracking-[-0.03em] title-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Notre histoire
              </h2>
              <div className="space-y-6 text-[17px] leading-[1.6] text-muted-foreground">
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
        </div>
      </section>

      <section id="services" className="py-40 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-5">
            <h2
              className="text-6xl font-bold tracking-[-0.03em] title-accent inline-block"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nos services
            </h2>
            <p className="text-[18px] text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
              Une gamme complète de services pour concrétiser vos projets industriels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-lg p-8 gradient-border-hover group">
              <div className="h-12 w-12 rounded-lg bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-all">
                <Settings className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.01em]" style={{ fontFamily: "var(--font-display)" }}>
                Conception 3D
              </h3>
              <p className="text-muted-foreground leading-[1.6] text-[15px]">
                Modélisation précise de vos projets avec SolidWorks et autres logiciels de CAO de pointe
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 gradient-border-hover group">
              <div className="h-12 w-12 rounded-lg bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-all">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.01em]" style={{ fontFamily: "var(--font-display)" }}>
                Mise en plan
              </h3>
              <p className="text-muted-foreground leading-[1.6] text-[15px]">
                Documentation technique complète et plans de fabrication détaillés
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 gradient-border-hover group">
              <div className="h-12 w-12 rounded-lg bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-all">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.01em]" style={{ fontFamily: "var(--font-display)" }}>
                Suivi de projet
              </h3>
              <p className="text-muted-foreground leading-[1.6] text-[15px]">
                Gestion complète de votre projet de la conception à la livraison
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 gradient-border-hover group">
              <div className="h-12 w-12 rounded-lg bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-all">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.01em]" style={{ fontFamily: "var(--font-display)" }}>
                Recherche de fournisseurs
              </h3>
              <p className="text-muted-foreground leading-[1.6] text-[15px]">
                Identification et sélection des meilleurs partenaires pour votre projet
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 gradient-border-hover group">
              <div className="h-12 w-12 rounded-lg bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-all">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.01em]" style={{ fontFamily: "var(--font-display)" }}>
                Agent manufacturier
              </h3>
              <p className="text-muted-foreground leading-[1.6] text-[15px]">
                Liaison entre votre entreprise et les fabricants pour une production optimale
              </p>
            </div>

            <div className="glass-card rounded-lg p-8 gradient-border-hover group">
              <div className="h-12 w-12 rounded-lg bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-all">
                <Wrench className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.01em]" style={{ fontFamily: "var(--font-display)" }}>
                Poinçons et matrices
              </h3>
              <p className="text-muted-foreground leading-[1.6] text-[15px]">
                Conception spécialisée d'outillages pour la transformation du métal à froid
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="realisations" className="py-40 px-6 lg:px-8 bg-secondary/30 relative section-divider">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-5">
            <h2
              className="text-6xl font-bold tracking-[-0.03em] title-accent inline-block"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nos réalisations
            </h2>
            <p className="text-[18px] text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
              Des projets réussis qui témoignent de notre expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <div key={i} className="glass-card rounded-lg overflow-hidden group cursor-pointer gradient-border-hover">
                <button
                  type="button"
                  onClick={() => setActiveProjectImage(project)}
                  className="relative h-56 w-full overflow-hidden text-left cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </button>
                <div className="p-6">
                  <p className="text-xs font-semibold text-primary mb-2 tracking-[0.08em] uppercase">
                    {project.category}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveProjectImage(project)}
                    className="text-left cursor-pointer"
                  >
                    <h3 className="text-lg font-bold tracking-[-0.01em]" style={{ fontFamily: "var(--font-display)" }}>
                      {project.title}
                    </h3>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {activeProjectImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/78 p-6 backdrop-blur-sm"
          onClick={() => setActiveProjectImage(null)}
        >
          <button
            type="button"
            aria-label="Fermer l'image"
            onClick={() => setActiveProjectImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white transition hover:bg-black/75"
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <div
            className="max-h-[88vh] max-w-[min(92vw,1400px)] overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeProjectImage.image}
              alt={activeProjectImage.title}
              className="max-h-[88vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      ) : null}

      <section id="contact" className="py-40 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="space-y-5">
                <h2
                  className="text-6xl font-bold tracking-[-0.03em] title-accent"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Contactez-nous
                </h2>
                <p className="text-[18px] text-muted-foreground leading-[1.6]">
                  Prêt à démarrer votre projet ? Notre équipe est là pour vous accompagner dans toutes les étapes de
                  votre conception mécanique.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <h3
                      className="font-semibold text-lg tracking-[-0.01em]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Téléphone
                    </h3>
                    <p className="text-muted-foreground text-[16px]">(581) 724-0163</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <h3
                      className="font-semibold text-lg tracking-[-0.01em]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Courriel
                    </h3>
                    <p className="text-muted-foreground text-[16px]">info@embconception.ca</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <h3
                      className="font-semibold text-lg tracking-[-0.01em]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Adresse
                    </h3>
                    <p className="text-muted-foreground text-[16px]">658 Des Rosiers, Thetford Mines, QC, G6G 5Y1</p>
                  </div>
                </div>

              </div>

              <div className="pt-10 border-t border-border/40">
                <h3
                  className="font-semibold mb-5 text-lg tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Suivez-nous
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/emb-conception-inc/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="h-11 w-11 rounded-lg bg-primary/8 hover:bg-primary/12 flex items-center justify-center transition-all"
                  >
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-lg p-10">
              <h3 className="text-3xl font-bold mb-8 tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
                Demande de soumission
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-[15px]"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Courriel</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-[15px]"
                    placeholder="jean@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-[15px]"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Type de projet</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-[15px]">
                    <option>Transformation du métal</option>
                    <option>Manutention</option>
                    <option>Conception 3D</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none text-[15px]"
                    placeholder="Décrivez votre projet..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full btn-premium bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-[15px] font-semibold"
                >
                  Envoyer la demande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-12 px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <img src="/logo.svg" alt="EMB Logo" className="h-6 w-auto" />
            </div>
            <p className="text-[13px] text-muted-foreground">© 2026 EMB Conception. Tous droits réservés.</p>
            <div className="flex gap-8 text-[13px]">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Confidentialité
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
