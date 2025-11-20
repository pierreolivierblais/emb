import { ArrowRight, CheckCircle2, Mail, Phone, Clock, Wrench, Package, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Removing SVG filter that caused grainy texture issues */}

      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2.5">
              <img src="/logo.svg" alt="EMB Logo" className="h-8 w-auto" />
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

      <section id="accueil" className="pt-32 pb-32 px-6 lg:px-8 hero-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1
                className="text-[72px] lg:text-[80px] font-bold leading-[0.9] tracking-[-0.04em] text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-clean">Conception mécanique de </span>
                {/* Using simpler gradient class without grainy effect */}
                <span className="text-gradient-red">précision</span>
              </h1>
              <p className="text-[18px] text-muted-foreground leading-[1.6] max-w-xl">
                Expert en transformation du métal à froid et systèmes de manutention. Solutions sur mesure pour vos
                projets industriels les plus exigeants.
              </p>
              <Button className="btn-premium bg-primary hover:bg-primary/90 text-primary-foreground group h-12 text-[15px] font-semibold">
                Démarrer un projet
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </Button>
            </div>
            <div className="relative h-[560px] rounded-lg overflow-hidden ambient-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="/industrial-metal-stamping-machinery.jpg"
                alt="Équipement industriel"
                className="w-full h-full object-cover image-hover"
              />
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

      <section id="apropos" className="py-40 px-6 lg:px-8 bg-secondary/30 relative section-divider">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[520px] rounded-lg overflow-hidden order-2 lg:order-1 ambient-glow">
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="/mechanical-engineering-workshop.jpg"
                alt="Atelier de conception"
                className="w-full h-full object-cover image-hover"
              />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2
                className="text-6xl font-bold tracking-[-0.03em] title-accent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Notre histoire
              </h2>
              <div className="space-y-6 text-muted-foreground leading-[1.6] text-[17px]">
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
            {[
              {
                title: "Système de convoyage automatisé",
                category: "Manutention",
                image: "/industrial-metal-stamping-machinery.jpg",
              },
              {
                title: "Outillage de matriçage",
                category: "Transformation métal",
                image: "/mechanical-engineering-workshop.jpg",
              },
              {
                title: "Ligne de cartonnage",
                category: "Manutention",
                image: "/industrial-metal-stamping-machinery.jpg",
              },
              {
                title: "Roll forming personnalisé",
                category: "Transformation métal",
                image: "/mechanical-engineering-workshop.jpg",
              },
              { title: "Poinçons haute précision", category: "Outillage", image: "/industrial-metal-stamping-machinery.jpg" },
              { title: "Convoyeur modulaire", category: "Manutention", image: "/mechanical-engineering-workshop.jpg" },
            ].map((project, i) => (
              <div key={i} className="glass-card rounded-lg overflow-hidden group cursor-pointer gradient-border-hover">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-primary mb-2 tracking-[0.08em] uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold tracking-[-0.01em]" style={{ fontFamily: "var(--font-display)" }}>
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-28 max-w-4xl mx-auto">
            <div className="glass-card rounded-lg p-12">
              <div className="flex items-start gap-6">
                <svg className="h-10 w-10 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="space-y-6">
                  <p className="text-xl leading-[1.6] text-foreground">
                    Excellent travail sur notre système de convoyage. L'équipe a fait preuve d'un grand
                    professionnalisme et d'une expertise technique remarquable. Le projet a été livré dans les délais et
                    répond parfaitement à nos besoins.
                  </p>
                  <div>
                    <p className="font-bold text-lg tracking-[-0.01em]" style={{ fontFamily: "var(--font-display)" }}>
                      Jean-Marc Tremblay
                    </p>
                    <p className="text-muted-foreground text-[15px] mt-1">Directeur des opérations, Industries XYZ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <p className="text-muted-foreground text-[16px]">(555) 123-4567</p>
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
                    <p className="text-muted-foreground text-[16px]">info@mecaniqueconception.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <h3
                      className="font-semibold text-lg tracking-[-0.01em]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Heures d'ouverture
                    </h3>
                    <p className="text-muted-foreground text-[15px]">Lundi - Vendredi: 8h00 - 17h00</p>
                    <p className="text-muted-foreground text-[15px]">Samedi - Dimanche: Fermé</p>
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
                    href="#"
                    className="h-11 w-11 rounded-lg bg-primary/8 hover:bg-primary/12 flex items-center justify-center transition-all"
                  >
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-11 w-11 rounded-lg bg-primary/8 hover:bg-primary/12 flex items-center justify-center transition-all"
                  >
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-11 w-11 rounded-lg bg-primary/8 hover:bg-primary/12 flex items-center justify-center transition-all"
                  >
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.663.07-4.948.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
            <p className="text-[13px] text-muted-foreground">© 2025 MécaniqueConception. Tous droits réservés.</p>
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
