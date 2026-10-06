import { ArrowDown, ArrowUpRight, Award, BadgeCheck, Mail, MapPin, Phone } from "lucide-react"

import CreditsAbduction from "@/components/ui/ufo-hero"
import { Section } from "@/components/portfolio/section"
import {
  achievements,
  education,
  experience,
  heroCredits,
  heroFragments,
  profile,
  projects,
  skills,
} from "@/lib/portfolio-data"

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export default function Home() {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <div className="relative">
        <h1 className="sr-only">
          {profile.name} — {profile.headline}
        </h1>
        <CreditsAbduction
          fullBleed
          captureTouch={false}
          title="NEELIMA KESANAKURTHI"
          tagline="COMPUTER SCIENCE · PYTHON · ARTIFICIAL INTELLIGENCE"
          credits={heroCredits}
          fragments={heroFragments}
          signature={false}
        />

        <nav
          aria-label="Primary"
          className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-4 py-4 sm:px-8"
        >
          <a
            href="#about"
            className="pointer-events-auto font-mono text-xs tracking-[0.2em] text-amber hover:text-foreground"
          >
            N.K.
          </a>
          <ul className="pointer-events-auto hidden gap-6 font-mono text-xs tracking-[0.15em] text-muted sm:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="uppercase transition-colors hover:text-amber">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="pointer-events-auto rounded-full border border-amber/40 px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] text-amber uppercase transition-colors hover:bg-amber hover:text-background sm:hidden"
          >
            Contact
          </a>
        </nav>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 pb-5">
          <p className="hidden font-mono text-[10px] tracking-[0.25em] text-muted/70 uppercase sm:block">
            Move to steer · hold to beam
          </p>
          <a
            href="#about"
            aria-label="Scroll to About"
            className="pointer-events-auto rounded-full border border-line p-2 text-muted transition-colors hover:border-amber hover:text-amber"
          >
            <ArrowDown className="size-4" />
          </a>
        </div>
      </div>

      {/* ─── About ────────────────────────────────────────────── */}
      <Section id="about" reel="01" title="The Premise">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <p className="text-2xl leading-relaxed text-foreground/90 italic sm:text-[1.7rem]">
            {profile.objective}
          </p>
          <div className="space-y-8">
            <h3 className="font-mono text-xs tracking-[0.2em] text-amber uppercase">Education</h3>
            {education.map((e) => (
              <div key={e.degree} className="border-l border-amber/40 pl-5">
                <p className="font-mono text-xs tracking-wider text-muted">{e.period}</p>
                <p className="mt-1 text-xl font-semibold">{e.degree}</p>
                <p className="text-lg text-muted">{e.school}</p>
                <p className="mt-2 font-mono text-sm text-amber">Aggregate {e.score}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── Experience ───────────────────────────────────────── */}
      <Section id="experience" reel="02" title="Internships">
        <ol className="space-y-10">
          {experience.map((x) => (
            <li key={x.org} className="grid gap-3 sm:grid-cols-[12rem_1fr] sm:gap-8">
              <div className="font-mono text-xs tracking-wider text-muted uppercase">
                {x.current && (
                  <span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-ember align-middle motion-reduce:animate-none" />
                )}
                {x.period}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">
                  {x.role} <span className="text-amber italic">— {x.org}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-lg leading-relaxed text-foreground/80">{x.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ─── Projects ─────────────────────────────────────────── */}
      <Section id="projects" reel="03" title="Feature Presentations">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-sm border border-line bg-panel p-6 transition-colors hover:border-amber/50"
            >
              <span className="font-mono text-xs text-muted transition-colors group-hover:text-amber">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight">{p.title}</h3>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-foreground/80">{p.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* ─── Skills ───────────────────────────────────────────── */}
      <Section id="skills" reel="04" title="Technical Crew">
        <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="border-b border-line pb-6">
              <dt className="font-mono text-xs tracking-[0.2em] text-amber uppercase">{s.group}</dt>
              <dd className="mt-3 text-xl leading-relaxed italic">{s.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ─── Certifications ───────────────────────────────────── */}
      <Section id="certifications" reel="05" title="Awards & Certificates">
        <ul className="grid gap-4 sm:grid-cols-2">
          {achievements.map((a) => {
            const Icon = a.award ? Award : BadgeCheck
            return (
              <li
                key={a.title}
                className={`flex gap-4 rounded-sm border p-5 ${a.award ? "border-amber/50 bg-amber/5" : "border-line"}`}
              >
                <Icon className={`mt-1 size-5 shrink-0 ${a.award ? "text-amber" : "text-muted"}`} />
                <div>
                  <h3 className="text-xl font-semibold">{a.title}</h3>
                  <p className="mt-1 text-lg text-foreground/75">{a.detail}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </Section>

      {/* ─── Contact ──────────────────────────────────────────── */}
      <Section id="contact" reel="06" title="Roll Credits">
        <p className="max-w-2xl text-2xl leading-relaxed text-foreground/90 italic">
          Open to roles in Python development, automation, data and AI. Email is the fastest way to reach me.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-amber px-5 py-3 font-mono text-sm text-background transition-colors hover:bg-foreground"
          >
            <Mail className="size-4 shrink-0" />
            <span className="break-all">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-3 rounded-full border border-line px-5 py-3 font-mono text-sm transition-colors hover:border-amber hover:text-amber"
          >
            <Phone className="size-4" />
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-line px-5 py-3 font-mono text-sm transition-colors hover:border-amber hover:text-amber"
          >
            LinkedIn
            <ArrowUpRight className="size-4" />
          </a>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted">
          <MapPin className="size-3.5" />
          {profile.location}
        </p>
      </Section>

      <footer className="border-t border-line px-4 py-10 text-center font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
        © {new Date().getFullYear()} {profile.name} · Hero effect by{" "}
        <a
          href="https://guglielmogiannattasio.it"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:text-amber hover:underline"
        >
          gughi&amp;partners
        </a>
      </footer>
    </main>
  )
}
