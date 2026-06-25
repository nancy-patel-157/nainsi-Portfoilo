import { createFileRoute } from "@tanstack/react-router";
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
  Award,
  ExternalLink,
  Trophy,
  Rocket,
  BadgeCheck,
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
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)]/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-[var(--emerald-accent)] animate-pulse" />
            Available for collaborations & internships
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Nainsi</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            B.Tech Computer Science Student · Full-Stack Web Developer ·{" "}
            <span className="text-foreground">Cloud & AI/ML Enthusiast</span>
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-[var(--surface)]/60 p-4">
            <BadgeCheck className="h-5 w-5 shrink-0 text-[var(--emerald-accent)] mt-0.5" />
            <p className="text-sm">
              Selected Contributor for{" "}
              <span className="font-semibold text-foreground">GirlScript Summer of Code (GSSoC) 2026</span>{" "}
              — <span className="text-muted-foreground">Open Source & AI Agents Tracks.</span>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Explore My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/nainsi-patel"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Let's Connect <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="relative mx-auto aspect-square max-w-md rounded-3xl card-surface p-6 overflow-hidden">
            <div className="absolute inset-0 opacity-30 grid-bg" />
            <div className="relative h-full w-full rounded-2xl border border-border bg-[var(--background)]/60 p-5 font-mono text-xs leading-relaxed overflow-hidden">
              <div className="flex gap-1.5 mb-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-muted-foreground">nainsi.ts</span>
              </div>
              <pre className="text-muted-foreground whitespace-pre-wrap">
<span className="text-[var(--cyan-accent)]">const</span> <span className="text-foreground">nainsi</span> = {"{"}
{"\n  "}name: <span className="text-[var(--emerald-accent)]">'Nainsi Patel'</span>,
{"\n  "}role: <span className="text-[var(--emerald-accent)]">'Full-Stack Developer'</span>,
{"\n  "}stack: [<span className="text-[var(--emerald-accent)]">'React'</span>, <span className="text-[var(--emerald-accent)]">'Django'</span>,
{"\n          "}<span className="text-[var(--emerald-accent)]">'AWS'</span>, <span className="text-[var(--emerald-accent)]">'Python'</span>],
{"\n  "}focus: <span className="text-[var(--emerald-accent)]">'Cloud + AI Agents'</span>,
{"\n  "}open_source: <span className="text-[var(--cyan-accent)]">true</span>,
{"\n  "}location: <span className="text-[var(--emerald-accent)]">'Delhi-NCR, India'</span>,
{"\n"}{"}"};
              </pre>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] text-muted-foreground">
                <span>// always building.</span>
                <span className="text-[var(--cyan-accent)]">▍</span>
              </div>
            </div>
          </div>
          {/* Floating chips */}
          <FloatingChip className="-top-3 left-6" icon={<Code2 className="h-3.5 w-3.5" />} label="React" />
          <FloatingChip className="top-1/3 -right-4" icon={<Cloud className="h-3.5 w-3.5" />} label="AWS" />
          <FloatingChip className="bottom-4 left-2" icon={<Cpu className="h-3.5 w-3.5" />} label="AI/ML" />
        </div>
      </div>
    </section>
  );
}

function FloatingChip({ className, icon, label }: { className?: string; icon: React.ReactNode; label: string }) {
  return (
    <div className={`absolute hidden md:flex items-center gap-1.5 rounded-full border border-border bg-[var(--surface)]/90 backdrop-blur px-3 py-1.5 text-xs shadow-lg ${className ?? ""}`}>
      <span className="text-[var(--cyan-accent)]">{icon}</span>
      {label}
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const timeline = [
    { year: "2023 — Present", title: "B.Tech, Computer Science & Engineering", place: "KIET Group of Institutions" },
    { year: "2026", title: "GSSoC '26 Contributor", place: "Open Source & AI Agents Tracks" },
    { year: "2025", title: "Smart India Hackathon Participant", place: "National-level innovation event" },
    { year: "2025", title: "AWS Cloud Practitioner — In Prep", place: "Cloud foundations & architecture" },
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

        <div className="card-surface p-6 md:p-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4 text-[var(--cyan-accent)]" /> Education & Milestones
          </div>
          <ol className="mt-6 relative border-l border-border pl-6 space-y-6">
            {timeline.map((t, i) => (
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

/* ---------------- SKILLS ---------------- */
function Skills() {
  const groups = [
    {
      icon: Code2,
      title: "Languages",
      items: ["Java", "Python", "C++", "SQL"],
    },
    {
      icon: Smartphone,
      title: "Web & Mobile",
      items: ["Tailwind CSS", "JavaScript (ES6+)", "Django", "Flutter", "Dart", "HTML / CSS"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      items: ["AWS S3", "CloudFront CDN", "Git", "GitHub Architecture"],
    },
    {
      icon: Cpu,
      title: "AI & Automation",
      items: ["AI Agents", "OpenAI GPT Integrations", "RPA"],
    },
  ];
  return (
    <section id="skills" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>02 — Skills</SectionLabel>
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
      title: "AWS Global Hosting Deployment",
      summary:
        "Optimized static hosting on Amazon S3 with a CloudFront CDN layer — custom bucket policies, edge caching, and forced HTTP→HTTPS redirection to minimize global latency.",
      tags: ["AWS", "S3", "CloudFront", "CDN"],
      icon: Cloud,
    },
    {
      title: "GSSoC '26 Frontend Contribution",
      summary:
        "Engineered a fully responsive 3-tier dark-themed Pricing Table component using Tailwind CSS for the Fork, Commit, Merge open-source ecosystem.",
      tags: ["Open Source", "Tailwind", "React"],
      icon: Rocket,
    },
    {
      title: "Smart-Document-Insights",
      summary:
        "A specialized Python pipeline engineered for automated text parsing and intelligent document insights with structured outputs.",
      tags: ["Python", "NLP", "Pipeline"],
      icon: Cpu,
    },
    {
      title: "Predictive ML Pipelines",
      summary:
        "Student Score Predictor and Customer Churn Prediction models built in Jupyter — feature engineering, evaluation, and clear interpretability.",
      tags: ["ML", "Jupyter", "Scikit-Learn"],
      icon: Cpu,
    },
    {
      title: "Cross-Platform Mobile Utilities",
      summary:
        "Sleek mobile applications built with Flutter and Dart — clean layouts, smooth navigation, and reusable widgets.",
      tags: ["Flutter", "Dart", "Mobile"],
      icon: Smartphone,
    },
    {
      title: "Open Source Footprint",
      summary:
        "Ongoing contributions to community-driven repos — issue triage, UI polish, and documentation improvements.",
      tags: ["GitHub", "OSS", "Docs"],
      icon: Github,
    },
  ];
  return (
    <section id="projects" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>03 — Projects</SectionLabel>
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
                  href="https://github.com/nancy-patel-151"
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
                href="https://github.com/nancy-patel-151"
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
    "Infosys Springboard — Generative AI & NLP",
    "Infosys Springboard — Advanced JavaScript",
    "Infosys Springboard — RPA",
    "Django Web Development",
    "AWS Cloud Practitioner (In Prep)",
  ];
  const hacks = [
    "HackerRank Orchestrate 2026 — Certificate of Excellence",
    "Smart India Hackathon (SIH) 2025 — Participant",
    "Qubit Quest — Competitive Participant",
    "FOSS Hack Delhi — Participant",
    "BFCET Hack 2.0 — Participant",
    "HackFinance — Participant",
  ];
  return (
    <section id="achievements" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>04 — Achievements</SectionLabel>
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
        <SectionLabel center>05 — Contact</SectionLabel>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Let's build <span className="text-gradient">something</span></h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Open to internships, open-source collaborations, and AI/cloud projects.
          Drop a note — I usually reply within a day.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <ContactCard icon={<Mail className="h-4 w-4" />} label="Email" value="nainsipatel26@gmail.com" href="mailto:nainsipatel26@gmail.com" />
          <ContactCard icon={<Github className="h-4 w-4" />} label="GitHub" value="nancy-patel-151" href="https://github.com/nancy-patel-151" />
          <ContactCard icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="nainsi-patel" href="https://linkedin.com/in/nainsi-patel" />
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
          <a href="https://github.com/nancy-patel-151" target="_blank" rel="noreferrer" className="hover:text-[var(--cyan-accent)]"><Github className="h-4 w-4" /></a>
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
