import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Cloud,
  Cpu,
  Smartphone,
  GraduationCap,
  School,
  Award,
  ExternalLink,
  Trophy,
  Rocket,
  BadgeCheck,
  Download,
  Star,
  Briefcase,
  Phone,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nainsi — Full-Stack Developer & Cloud / AI-ML Enthusiast" },
      { name: "description", content: "Portfolio of Nainsi: B.Tech CSE @ KIET, full-stack web developer, GSSoC '26 contributor, cloud & AI-ML enthusiast." },
      { property: "og:title", content: "Nainsi — Portfolio" },
      { property: "og:description", content: "Full-stack developer, GSSoC '26 contributor, cloud & AI-ML enthusiast." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}


/* ---------------- NAV ---------------- */
function Nav() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 sm:flex sm:justify-between">
        <a href="#home" className="flex min-w-0 items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[var(--cyan-accent)] to-[var(--emerald-accent)] text-[var(--primary-foreground)]">
            N
          </span>
          <span className="truncate">Nainsi<span className="text-gradient">.dev</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary hidden sm:inline-flex">
          <Sparkles className="h-4 w-4" /> Hire Me
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
const ROLES = [
  "Full-Stack Web Developer",
  "Cloud & AI/ML Enthusiast",
  "Open Source Contributor",
  "B.Tech CSE @ KIET",
];

function useRotatingRole(items: string[], interval = 2400) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items, interval]);
  return { index: i, value: items[i] };
}

function Hero() {
  const role = useRotatingRole(ROLES);
  const orbit = [
    { label: "React", icon: Code2, deg: 0 },
    { label: "AWS", icon: Cloud, deg: 60 },
    { label: "Python", icon: Cpu, deg: 120 },
    { label: "Django", icon: Rocket, deg: 180 },
    { label: "Flutter", icon: Smartphone, deg: 240 },
    { label: "AI", icon: Sparkles, deg: 300 },
  ];
  const marquee = [
    "React", "Tailwind", "TypeScript", "Django", "Python", "Java", "C++", "AWS S3",
    "CloudFront", "Flutter", "Dart", "Git", "OpenAI", "RPA", "SQL",
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Aurora orbs */}
      <div aria-hidden className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,var(--cyan-accent),transparent_60%)] animate-orb" />
      <div aria-hidden className="absolute -bottom-32 -right-20 h-[480px] w-[480px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,var(--emerald-accent),transparent_60%)] animate-orb" style={{ animationDelay: "-6s" }} />
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />
      <div aria-hidden className="absolute inset-0 noise opacity-[0.06] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        {/* LEFT */}
        <div className="min-w-0 animate-rotate-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)]/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--emerald-accent)] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--emerald-accent)]" />
            </span>
            Available for collaborations & internships
          </div>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02]">
            Hi, I'm <span className="text-gradient-anim">Nainsi</span>
            <span className="inline-block ml-1 h-[0.9em] w-[3px] translate-y-2 bg-[var(--cyan-accent)] animate-pulse align-middle" />
          </h1>

          {/* Rotating role */}
          <div className="mt-5 flex items-center gap-3 text-base md:text-lg">
            <span className="font-mono text-[var(--cyan-accent)]">{">"}</span>
            <span className="text-muted-foreground">I build as a</span>
            <span key={role.index} className="font-semibold text-foreground animate-rotate-in">
              {role.value}
            </span>
          </div>

          <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
            Crafting scalable full-stack experiences with React, Django, and AWS — and exploring
            the next wave of intelligent automation with AI agents.
          </p>

          {/* GSSoC highlight */}
          <div className="mt-6 relative rounded-2xl p-[1px] bg-gradient-to-r from-[var(--cyan-accent)]/60 via-transparent to-[var(--emerald-accent)]/60">
            <div className="flex items-start gap-3 rounded-2xl bg-[var(--surface)]/80 backdrop-blur p-4">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--cyan-accent)]/20 to-[var(--emerald-accent)]/20 border border-border">
                <Star className="h-4 w-4 text-[var(--emerald-accent)]" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--cyan-accent)]">Featured</div>
                <p className="mt-0.5 text-sm">
                  <span className="font-semibold text-foreground">GSSoC 2026 Contributor</span>
                  <span className="text-muted-foreground"> — Open Source & AI Agents Tracks.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary group">
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://linkedin.com/in/nainsi-patel"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Linkedin className="h-4 w-4" /> Let's Connect
            </a>
            <a href="mailto:nainsipatel26@gmail.com" className="btn-ghost">
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-10 grid grid-cols-3 max-w-md divide-x divide-border rounded-2xl border border-border bg-[var(--surface)]/50 backdrop-blur">
            {[
              { v: "15+", l: "Projects" },
              { v: "6+", l: "Certifications" },
              { v: "4+", l: "Hackathons" },
            ].map((s) => (
              <div key={s.l} className="p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — orbit visual */}
        <div className="relative mx-auto w-full max-w-[460px] aspect-square">
          {/* Outer rings */}
          <div className="absolute inset-0 rounded-full border border-border/70" />
          <div className="absolute inset-[10%] rounded-full border border-border/50" />
          <div className="absolute inset-[22%] rounded-full border border-border/40" />

          {/* Glow behind avatar */}
          <div className="absolute inset-[28%] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--cyan-accent)_55%,transparent),transparent_70%)] blur-2xl" />

          {/* Avatar core */}
          <div className="absolute inset-[28%] rounded-full overflow-hidden border border-border bg-[var(--surface)] grid place-items-center animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--cyan-accent)]/20 via-transparent to-[var(--emerald-accent)]/25" />
            <div className="relative font-display text-6xl font-bold text-gradient-anim select-none">N</div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[var(--background)]/80 border border-border text-[10px] font-mono text-muted-foreground">
              nainsi.dev
            </div>
          </div>

          {/* Orbiting badges */}
          <div className="absolute inset-0 animate-spin-slow">
            {orbit.map((o) => (
              <div
                key={o.label}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `translate(-50%,-50%) rotate(${o.deg}deg) translateY(calc(-50% - 5rem))` }}
              >
                <div className="animate-spin-reverse">
                  <div className="flex items-center gap-1.5 rounded-full border border-border bg-[var(--surface)]/90 backdrop-blur px-2.5 py-1 text-[11px] shadow-lg">
                    <o.icon className="h-3.5 w-3.5 text-[var(--cyan-accent)]" />
                    <span className="font-mono">{o.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Corner status card */}
          <div className="hidden md:flex absolute -bottom-2 -left-2 items-center gap-2 rounded-xl border border-border bg-[var(--surface)]/90 backdrop-blur px-3 py-2 text-xs shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[var(--emerald-accent)] animate-pulse" />
            <span className="font-mono text-muted-foreground">deploying to</span>
            <span className="font-semibold">AWS</span>
          </div>
          <div className="hidden md:flex absolute -top-2 -right-2 items-center gap-2 rounded-xl border border-border bg-[var(--surface)]/90 backdrop-blur px-3 py-2 text-xs shadow-xl">
            <Github className="h-3.5 w-3.5 text-[var(--cyan-accent)]" />
            <span className="font-mono">commits +1.2k</span>
          </div>
        </div>
      </div>

      {/* Marquee tech strip */}
      <div className="relative border-y border-border bg-[var(--surface)]/40 backdrop-blur">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-10 py-4 w-max animate-marquee">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-[var(--cyan-accent)]" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const education = [
    { year: "2024 — 2028", title: "B.Tech, Computer Science & Engineering", place: "KIET Group of Institutions" },
    { year: "Schooling", title: "Jawahar Navodaya Vidyalaya (JNV)", place: "12th — 85% · PCM & IT" },
  ];
  const milestones = [
    { year: "2026", title: "GSSoC '26 Contributor", place: "Selected among 35,000+ applicants" },
    { year: "2026", title: "Forage — GenAI Data Analytics Virtual Experience", place: "XGBoost, SHAP, recommendation frameworks" },
    { year: "2025", title: "Smart India Hackathon (SIH) 2025 — Participant", place: "National-level innovation event" },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionLabel>01 — About</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">About <span className="text-gradient">Me</span></h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I'm an analytical developer pursuing my <span className="text-foreground">Bachelor of Technology in
            Computer Science & Engineering</span> at <span className="text-foreground">KIET Group of Institutions</span>.
            My foundation in <span className="text-foreground">Data Structures & Algorithms</span> meets
            hands-on building — from scalable web stacks to cloud deployments and AI workflows.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I love shipping clean, performant interfaces, designing dependable APIs, and exploring how
            <span className="text-foreground"> AI agents and automation</span> can compound everyday work.
            Recently selected as a <span className="text-foreground">GSSoC '26 contributor</span> across
            the Open Source and AI Agents tracks.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat value="15+" label="Projects" />
            <Stat value="6+" label="Certifications" />
            <Stat value="4+" label="Hackathons" />
          </div>
        </div>

        <div className="space-y-6">
          {/* Education Card */}
          <div className="card-surface p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <School className="h-4 w-4 text-[var(--cyan-accent)]" /> Education
            </div>
            <ol className="mt-6 relative border-l border-border pl-6 space-y-6">
              {education.map((t, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-gradient-to-br from-[var(--cyan-accent)] to-[var(--emerald-accent)] ring-4 ring-background" />
                  <div className="text-xs font-mono text-[var(--cyan-accent)]">{t.year}</div>
                  <div className="mt-1 font-semibold">{t.title}</div>
                  <div className="text-sm text-muted-foreground">{t.place}</div>
                </li>
              ))}
            </ol>
          </div>

          {/* Milestones Card */}
          <div className="card-surface p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Trophy className="h-4 w-4 text-[var(--emerald-accent)]" /> Milestones
            </div>
            <ol className="mt-6 relative border-l border-border pl-6 space-y-6">
              {milestones.map((t, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-gradient-to-br from-[var(--cyan-accent)] to-[var(--emerald-accent)] ring-4 ring-background" />
                  <div className="text-xs font-mono text-[var(--cyan-accent)]">{t.year}</div>
                  <div className="mt-1 font-semibold">{t.title}</div>
                  <div className="text-sm text-muted-foreground">{t.place}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-surface p-4 text-center">
      <div className="text-2xl font-display font-bold text-gradient">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  const roles = [
    {
      title: "GenAI Powered Data Analytics — Virtual Experience",
      org: "Forage",
      date: "June 2026",
      bullets: [
        "Conducted exploratory data analysis on customer financial datasets",
        "Identified delinquency risk indicators for predictive systems",
        "Built ML workflow concepts using XGBoost and SHAP explainability",
        "Developed recommendation frameworks for business decision-making",
      ],
    },
  ];
  return (
    <section id="experience" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>02 — Experience</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Professional <span className="text-gradient">Experience</span></h2>
        </div>
        <div className="mt-12 grid gap-6">
          {roles.map((r) => (
            <div key={r.title} className="card-surface card-surface-hover p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--cyan-accent)]/20 to-[var(--emerald-accent)]/20 border border-border">
                  <Briefcase className="h-5 w-5 text-[var(--cyan-accent)]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-lg">{r.title}</h3>
                    <span className="text-xs font-mono text-[var(--cyan-accent)]">{r.date}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{r.org}</div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--emerald-accent)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- SKILLS ---------------- */
function Skills() {
  const groups = [
    {
      icon: Code2,
      title: "Languages",
      items: ["Python", "C++", "SQL", "JavaScript", "Dart", "HTML", "CSS"],
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      items: ["Pandas", "NumPy", "Scikit-learn", "Model Evaluation", "Data Preprocessing", "Generative AI"],
    },
    {
      icon: Cloud,
      title: "Cloud & Databases",
      items: ["AWS S3", "CloudFront", "AWS Services", "MySQL"],
    },
    {
      icon: Smartphone,
      title: "Tools & Core",
      items: ["Git", "Linux", "VS Code", "Jupyter", "DSA", "OOP", "DBMS", "Flutter"],
    },
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>03 — Skills</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Core <span className="text-gradient">Skill Matrix</span></h2>
          <p className="mt-4 text-muted-foreground">
            A pragmatic toolkit across the full stack — from typed languages and frontend systems
            to cloud delivery and intelligent automation.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="card-surface card-surface-hover p-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--cyan-accent)]/20 to-[var(--emerald-accent)]/20 border border-border">
                <g.icon className="h-5 w-5 text-[var(--cyan-accent)]" />
              </div>
              <h3 className="mt-4 font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-border bg-[var(--background)]/60 px-2.5 py-1 text-xs font-mono text-muted-foreground">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const projects = [
    {
      title: "AWS Static Hosting & CloudFront CDN",
      summary:
        "Globally optimized static hosting on Amazon S3 with CloudFront — edge caching, secure bucket policies, HTTPS redirection, and reduced global latency.",
      tags: ["AWS", "S3", "CloudFront", "CDN"],
      icon: Cloud,
    },
    {
      title: "Smart-Document-Insights",
      summary:
        "Python-based document analytics repository for workflow processing — automated parsing and structured insights from unstructured docs.",
      tags: ["Python", "NLP", "Analytics"],
      icon: Cpu,
    },
    {
      title: "Customer Churn Prediction",
      summary:
        "End-to-end predictive ML pipeline with Flask integration for churn-risk analysis — feature engineering, model evaluation, and deployment.",
      tags: ["ML", "Flask", "Scikit-learn"],
      icon: Cpu,
    },
    {
      title: "Student Score Predictor",
      summary:
        "Machine learning model evaluating and predicting academic performance with clean preprocessing and interpretability.",
      tags: ["ML", "Pandas", "Regression"],
      icon: Cpu,
    },
    {
      title: "Multi-Domain Support Triage Agent",
      summary:
        "Terminal-based RAG automation system for intelligent log analysis and ticket triage across multiple support domains.",
      tags: ["RAG", "LLM", "Automation"],
      icon: Sparkles,
    },
    {
      title: "Open Source Contribution — Pricing Table",
      summary:
        "Responsive dark-themed pricing table built with Tailwind CSS via the Fork, Commit, Merge workflow — PRs, reviews, and repo sync.",
      tags: ["Open Source", "Tailwind", "Git"],
      icon: Rocket,
    },
    {
      title: "Cross-Platform Flutter Apps",
      summary:
        "Flutter applications including an Image Gallery App and a stateful profile-card system — reusable widgets and smooth navigation.",
      tags: ["Flutter", "Dart", "Mobile"],
      icon: Smartphone,
    },
  ];

  return (
    <section id="projects" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>04 — Projects</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Featured <span className="text-gradient">Work</span></h2>
          <p className="mt-4 text-muted-foreground">
            Selected projects across cloud, frontend, and applied AI — built with a bias toward
            clean architecture and measurable impact.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article key={p.title} className="card-surface card-surface-hover group p-6 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--cyan-accent)]/15 to-[var(--emerald-accent)]/15 border border-border">
                  <p.icon className="h-5 w-5 text-[var(--cyan-accent)]" />
                </div>
                <a
                  href="https://github.com/nancy-patel-157"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-[var(--cyan-accent)] transition-colors"
                  aria-label="View source"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <h3 className="mt-5 font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-border bg-[var(--background)]/60 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/nancy-patel-157"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-[var(--cyan-accent)] hover:gap-2.5 transition-all"
              >
                View source <ArrowRight className="h-3.5 w-3.5" />
              </a>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
function Achievements() {
  const certs = [
    "AWS Certified Data Engineer",
    "AWS AI & ML Scholars — Challenge Completion",
    "ECMAScript ES6 JavaScript",
    "MySQL — Oracle Academy Certified",
    "Dart Programming Training",
    "Learning Django Web Development",
  ];
  const hacks = [
    "GirlScript Summer of Code (GSSoC) 2026 — Contributor (Selected among 35,000+)",
    "Smart India Hackathon (SIH) 2025 — Participant",
    "Qubit Quest — Participant",
    "FOSS Hack Delhi — Participant",
    "BFCET Hack 2.0 — Participant",
    "HackFinance — Participant",
  ];

  return (
    <section id="achievements" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>05 — Achievements</SectionLabel>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Credentials &amp; <span className="text-gradient">Hackathons</span></h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="card-surface p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4 text-[var(--cyan-accent)]" /> Certifications
            </div>
            <ul className="mt-5 space-y-3">
              {certs.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <BadgeCheck className="h-4 w-4 mt-0.5 text-[var(--emerald-accent)] shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Trophy className="h-4 w-4 text-[var(--emerald-accent)] " /> Hackathons & Events
            </div>
            <ul className="mt-5 space-y-3">
              {hacks.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <Sparkles className="h-4 w-4 mt-0.5 text-[var(--cyan-accent)] shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionLabel center>06 — Contact</SectionLabel>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Let's build <span className="text-gradient">something</span></h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Open to internships, open-source collaborations, and AI/cloud projects.
          Drop a note — I usually reply within a day.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          <ContactCard icon={<Mail className="h-4 w-4" />} label="Email" value="nainsipatel26@gmail.com" href="mailto:nainsipatel26@gmail.com" />
          <ContactCard icon={<Phone className="h-4 w-4" />} label="Phone" value="+91 8127988938" href="tel:+918127988938" />
          <ContactCard icon={<Github className="h-4 w-4" />} label="GitHub" value="nancy-patel-157" href="https://github.com/nancy-patel-157" />
          <ContactCard icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="nainsi-patel" href="https://linkedin.com/in/nainsi-patel" />
          <ContactCard icon={<Code2 className="h-4 w-4" />} label="Portfolio" value="nancy-patel-157.github.io/portfolio" href="https://nancy-patel-157.github.io/portfolio" />
          <ContactCard icon={<Code2 className="h-4 w-4" />} label="Codolio" value="profile/Nainsi" href="https://codolio.com/profile/Nainsi" />
        </div>


        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="mailto:nainsipatel26@gmail.com" className="btn-primary">
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a href="https://linkedin.com/in/nainsi-patel" target="_blank" rel="noreferrer" className="btn-ghost">
            <Linkedin className="h-4 w-4" /> Connect on LinkedIn
          </a>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-[var(--cyan-accent)]" /> Delhi-NCR / Ghaziabad, India
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="card-surface card-surface-hover p-4 flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--background)]/60 border border-border text-[var(--cyan-accent)]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm">{value}</div>
      </div>
    </a>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
        <div className="min-w-0 text-sm text-muted-foreground truncate">
          © {new Date().getFullYear()} <span className="text-foreground">Nainsi</span> · Built with care.
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/nancy-patel-157" target="_blank" rel="noreferrer" className="hover:text-[var(--cyan-accent)]"><Github className="h-4 w-4" /></a>
          <a href="https://linkedin.com/in/nainsi-patel" target="_blank" rel="noreferrer" className="hover:text-[var(--cyan-accent)]"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:nainsipatel26@gmail.com" className="hover:text-[var(--cyan-accent)]"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */
function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[var(--cyan-accent)] ${center ? "justify-center" : ""}`}>
      <span className="h-px w-6 bg-[var(--cyan-accent)]/60" />
      {children}
    </div>
  );
}
