"use client";

import { useMemo } from "react";

const services = [
  {
    title: "Chatbots sur mesure",
    description:
      "Expériences conversationnelles alignées avec votre identité de marque, multicanal et multilingue.",
    points: [
      "Personnalité et ton adaptés à vos valeurs",
      "Intégration native CRM, CMS, bases de connaissances",
      "Optimisation continue via analytics et feedback",
    ],
  },
  {
    title: "Automatisations n8n avancées",
    description:
      "Automatisation des workflows pour un pilotage fluide et mesurable de votre activité.",
    points: [
      "Mapping complet des processus métier",
      "Connecteurs personnalisés et mises à jour en temps réel",
      "Scénarios complexes gérés avec résilience",
    ],
  },
  {
    title: "Stratégie AI Ops",
    description:
      "Accompagnement stratégique et technique pour industrialiser l&rsquo;IA dans vos opérations.",
    points: [
      "Audit IA & ateliers d&rsquo;idéation sectorisés",
      "Feuille de route de déploiement et pilotage KPI",
      "Support long terme et formation équipes",
    ],
  },
];

const process = [
  {
    title: "Explorer",
    body: "Immersion dans vos usages, collecte de données et cartographie des opportunités IA pour générer des gains rapides et mesurables.",
    stat: "2 semaines",
  },
  {
    title: "Orchestrer",
    body: "Construction des scénarios n8n, entraînement du chatbot et intégration des API pour une collaboration fluide homme-machine.",
    stat: "4 sprints",
  },
  {
    title: "Amplifier",
    body: "Monitoring en continu, tests A/B et optimisation des prompts pour multiplier la performance et garantir la scalabilité.",
    stat: "+65 % d&rsquo;efficacité",
  },
];

export default function Home() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <main>
      <header className="container hero">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                background:
                  "linear-gradient(140deg, #6366f1 0%, #8b5cf6 55%, #ec4899 100%)",
                display: "grid",
                placeItems: "center",
                fontWeight: 600,
                fontSize: "18px",
                letterSpacing: "0.04em",
              }}
            >
              IW
            </div>
            <div>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "var(--foreground)",
                }}
              >
                Intelliwave
              </p>
              <p style={{ fontSize: "14px" }}>Agence d&rsquo;automatisation AI</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              flexWrap: "wrap",
              color: "var(--muted)",
            }}
          >
            <a href="#services">Solutions</a>
            <a href="#process">Méthode</a>
            <a href="#resultats">Résultats</a>
            <a href="#contact" className="cta-secondary">
              Nous contacter
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <span className="badge">Agence IA n8n</span>
            <h1 className="hero-title gradient">
              Automatisations intelligentes, conversations naturelles.
            </h1>
            <p className="hero-subtitle">
              Intelliwave conçoit des chatbots sur mesure et des workflows
              n8n orchestrés pour transformer vos processus et offrir une
              expérience client augmentée.
            </p>
            <div className="cta-row">
              <a className="cta-primary" href="#contact">
                Planifier un diagnostic
              </a>
              <a className="cta-secondary" href="#services">
                Découvrir nos expertises
              </a>
            </div>
            <div className="stats-banner">
              <div>
                <span>150+</span>
                <p>Automatisations orchestrées sur mesure</p>
              </div>
              <div>
                <span>24/7</span>
                <p>Support proactif & optimisation continue</p>
              </div>
              <div>
                <span>4.8/5</span>
                <p>Satisfaction client sur nos projets IA</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-orb secondary" />
            <div className="floating-orb" />
            <div className="hero-diagram">
              <div className="hero-diagram-card">
                <span>Hub n8n</span>
                <strong>Automations orchestrées</strong>
                <p>
                  Agrégation de vos outils (CRM, ERP, support) et exécution
                  autonome des tâches répétitives.
                </p>
              </div>
              <div className="hero-diagram-card">
                <span>Chatbot IA</span>
                <strong>Identité conversationnelle</strong>
                <p>
                  Langage naturel, mémoire contextuelle et réponses enrichies
                  depuis vos connaissances métiers.
                </p>
              </div>
              <div className="hero-diagram-card">
                <span>Insights</span>
                <strong>Tableau de bord IA Ops</strong>
                <p>
                  Mesure les gains de productivité, la satisfaction client et
                  les suggestions d&rsquo;amélioration continue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="services">
        <div className="container">
          <p className="section-title">Expertises</p>
          <div className="split-section">
            <div className="panel gradient-stroke">
              <h2>
                Nous fusionnons les meilleurs frameworks IA avec la puissance de
                l&rsquo;orchestration n8n pour accélérer vos résultats.
              </h2>
              <p>
                De la stratégie à l&rsquo;implémentation, nous concevons des chatbots
                et automatisations capables d&rsquo;apprendre, s&rsquo;adapter et évoluer
                avec votre entreprise.
              </p>
              <div className="pill-grid">
                {[
                  "Design Conversationnel",
                  "Vectorisation des données",
                  "Intégrations API & webhook",
                  "Monitoring et analytics",
                  "Sécurité & conformité RGPD",
                  "Formation & coaching équipes",
                ].map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-grid">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="container">
          <p className="section-title">Méthodologie</p>
          <div className="split-section">
            <div className="panel">
              <h2>
                Une approche structurée pour déployer l&rsquo;automatisation en toute
                confiance.
              </h2>
              <p>
                Chaque mission est pilotée par un Product Strategist, un
                Solutions Architect n8n et un AI Conversation Designer. Nous
                opérons en sprints courts, avec des livrables actionnables à
                chaque étape.
              </p>
            </div>
            <div className="card-grid">
              {process.map((step) => (
                <article className="card" key={step.title}>
                  <span className="badge" style={{ width: "fit-content" }}>
                    {step.stat}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resultats">
        <div className="container">
          <p className="section-title">Résultats</p>
          <div className="split-section">
            <div className="panel gradient-stroke">
              <h2>Des gains tangibles, validés par les équipes terrain.</h2>
              <p>
                Intelliwave s&rsquo;engage sur des KPIs opérationnels : réduction des
                temps de réponse, automatisation des tâches manuelles, qualité
                de service améliorée.
              </p>
              <div className="stats-banner">
                <div>
                  <span>−45%</span>
                  <p>Temps de traitement des demandes support</p>
                </div>
                <div>
                  <span>+32%</span>
                  <p>Conversions des leads entrants grâce aux chatbots</p>
                </div>
                <div>
                  <span>3x</span>
                  <p>Plus de tâches automatisées par collaborateur</p>
                </div>
              </div>
            </div>
            <div className="testimonials">
              <article className="testimonial-card">
                <p>
                  “Le chatbot conçu par Intelliwave a multiplié par deux notre
                  taux de résolution au premier contact. L&rsquo;intégration n8n nous
                  a fait gagner des heures chaque semaine.”
                </p>
                <strong>Claire Martin</strong>
                <p>Directrice Expérience Client · HeliaCare</p>
              </article>
              <article className="testimonial-card">
                <p>
                  “Leur équipe a su aligner l&rsquo;IA à nos contraintes internes et
                  fournir un monitoring clair. Nous avons sécurisé la montée en
                  charge sans renfort de staff.”
                </p>
                <strong>Julien Favre</strong>
                <p>COO · NovaLogistics</p>
              </article>
              <article className="testimonial-card">
                <p>
                  “Intelliwave ne livre pas juste un chatbot. Ils orchestrent
                  l&rsquo;ensemble des flux et créent une expérience client cohérente
                  et personnalisée.”
                </p>
                <strong>Sonia Dupuis</strong>
                <p>CMO · Urbania Collective</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="split-section">
            <div className="panel">
              <h2>Prêt à accélérer vos opérations avec l&rsquo;IA ?</h2>
              <p>
                Partagez vos challenges, nous préparons un plan d&rsquo;automatisation
                personnalisé avec un prototype conversationnel livré en 10 jours.
              </p>
              <div className="pill-grid">
                {[
                  "Diagnostic offert",
                  "Prototype en 10 jours",
                  "Equipe dédiée senior",
                  "Workshops sur site ou à distance",
                ].map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <form
              className="panel"
              style={{ gap: "16px" }}
              action="https://formspree.io/f/maylrynk"
              method="POST"
            >
              <div style={{ display: "grid", gap: "8px" }}>
                <label htmlFor="name">Votre nom</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Marie Dupont"
                  required
                  className="form-control"
                />
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                <label htmlFor="email">Email professionnel</label>
                <input
                  id="email"
                  name="_replyto"
                  type="email"
                  placeholder="marie@entreprise.com"
                  required
                  className="form-control"
                />
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                <label htmlFor="company">Organisation</label>
                <input
                  id="company"
                  name="company"
                  placeholder="Nom de l&rsquo;entreprise"
                  className="form-control"
                />
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                <label htmlFor="message">Projet & objectifs</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Expliquez-nous votre défi automation ou chatbot..."
                  className="form-control"
                  style={{ resize: "vertical", minHeight: "120px" }}
                  required
                />
              </div>
              <button type="submit" className="cta-primary">
                Recevoir une proposition
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(140deg, #6366f1 0%, #8b5cf6 55%, #ec4899 100%)",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  IW
                </div>
                <strong style={{ fontSize: "18px" }}>Intelliwave</strong>
              </div>
              <p>
                Nous aidons les organisations à tirer parti de l&rsquo;IA pour créer
                des interactions mémorables et automatiser leurs opérations avec
                fiabilité.
              </p>
            </div>
            <div className="footer-links">
              <strong>Contact</strong>
              <a href="mailto:hello@intelliwave.ai">hello@intelliwave.ai</a>
              <a href="tel:+33180051420">+33 1 80 05 14 20</a>
              <p>Paris · Lyon · Montréal</p>
            </div>
            <div className="footer-links">
              <strong>Ressources</strong>
              <a href="#services">Automatisations</a>
              <a href="#process">Méthodologie</a>
              <a href="#resultats">Études de cas</a>
              <a href="#contact">Prendre rendez-vous</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {currentYear} Intelliwave. Tous droits réservés.</span>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">Security Center</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
