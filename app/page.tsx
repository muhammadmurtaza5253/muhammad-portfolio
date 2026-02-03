import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Dubizzle Labs",
    location: "",
    period: "Oct 2024 – Dec 2025",
    description:
      "Built and enhanced features for the dubizzle UAE platform using Next.js on the frontend and working with Django-based microservices on the backend. Collaborated with team members to implement requirements, fix issues, and maintain clean and scalable code.",
  },
  {
    role: "Software Engineer",
    company: "Dawat-e-Hadiyah",
    location: "",
    period: "May 2024 – Sep 2024",
    description:
      "Developed a web-based Project Charter Management system with dynamic, configurable forms, implemented role-based authentication, and delivered a fully functional MVP within 4 months.",
  },
  {
    role: "Software Engineer Intern",
    company: "Q-Solutions",
    location: "",
    period: "June 2023 – Sep 2023",
    description:
      "Developed a MVP for fitness based mobile application using flutter and python for the backend that helped users plan their workout.",
  },
];

const PROJECTS = [
  {
    name: "Project Alpha",
    description:
      "A distributed system for real-time data processing. Built with Go and Kafka.",
    href: "#",
    githubHref: "#",
    tags: ["Go", "Kafka", "PostgreSQL"],
  },
  {
    name: "Project Beta",
    description:
      "Internal dashboard for monitoring and alerting. React front end, Node.js API.",
    href: "#",
    githubHref: "#",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    name: "Project Gamma",
    description:
      "Open-source CLI tool for local development workflows. 2k+ GitHub stars.",
    href: "#",
    githubHref: "#",
    tags: ["Rust", "CLI"],
  },
];

const SKILLS = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Ambient gradient orbs (decorative) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-[100px] animate-[float_15s_ease-in-out_infinite]"
          aria-hidden
        />
        <div
          className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-500/15 blur-[120px] animate-[float_18s_ease-in-out_infinite_reverse]"
          aria-hidden
        />
        <div
          className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[80px] animate-[float_12s_ease-in-out_infinite]"
          aria-hidden
        />
      </div>

      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link
            href="#"
            className="text-sm font-medium text-[var(--foreground)] transition hover:opacity-80 focus:outline-none focus-visible:opacity-100"
          >
            Your Name
          </Link>
          <ul className="flex gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="nav-link text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] focus:outline-none focus-visible:text-[var(--foreground)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative">
        {/* Hero */}
        <section className="section-border relative px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-2xl">
            <p className="mb-2 text-sm font-medium text-[var(--muted)]">
              Software Engineer
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Muhammad Murtaza</span>. I build
              reliable software and clear systems.
            </h1>
            <p className="mt-6 max-w-xl text-[var(--muted)]">
              Based in the United States. Focused on frontend and backend systems, APIs, and
              developer experience. Previously worked at dubizzle UAE.
            </p>
            <div className="mt-10 flex gap-4">
              <a
                href="#contact"
                className="btn-gradient inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gradient-mid)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                Get in touch
              </a>
              <a
                href="https://drive.google.com/file/d/1nRxez9vV_3Vutg_077Sl4hgwlJqyiFyl/view?usp=sharing"
                target="_blank"
                className="btn-ghost-gradient inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium text-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gradient-mid)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              >
                Resume
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-border px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              About
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--foreground)]">
              I&apos;m a software engineer with 2 years of experience building
              web applications and distributed systems. I care about clean code,
              clear APIs, and maintainable architecture. When I&apos;m not
              coding, When I'm not coding, I might be at the gym or writing LinkedIn posts.
            </p>
            <p className="mt-4 text-[var(--muted)]">
              I&apos;m currently open to new opportunities and happy to chat
              about projects or roles.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section-border px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Experience
            </h2>
            <ul className="mt-10 space-y-12">
              {EXPERIENCE.map((job) => (
                <li
                  key={`${job.company}-${job.role}`}
                  className="group rounded-xl border border-[var(--border)] bg-[var(--background)]/50 p-5 transition hover:border-indigo-500/30 hover:bg-indigo-500/5"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)] transition group-hover:text-indigo-300">
                        {job.role}
                      </h3>
                      <p className="text-[var(--muted)]">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <time
                      dateTime={job.period}
                      className="mt-1 shrink-0 text-sm text-[var(--muted)] sm:mt-0"
                    >
                      {job.period}
                    </time>
                  </div>
                  <p className="mt-3 text-[var(--foreground)] leading-relaxed opacity-90">
                    {job.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-border px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Selected projects
            </h2>
            <ul className="mt-10 space-y-6">
              {PROJECTS.map((project) => (
                <li key={project.name} className="relative">
                  <Link
                    href={project.href}
                    className="group gradient-border block rounded-xl border border-[var(--border)] bg-[var(--background)]/50 p-5 pr-14 transition hover:bg-[var(--background)]/80 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gradient-mid)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  >
                    <h3 className="font-semibold text-[var(--foreground)] transition group-hover:text-indigo-300">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {project.description}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md bg-[var(--border)]/80 px-2.5 py-1 text-xs font-medium text-[var(--muted)]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </Link>
                  <a
                    href={project.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background)]/80 text-[var(--muted)] transition hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_16px_rgba(99,102,241,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section-border px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Skills
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <li key={skill}>
                  <span
                    className="skill-tag inline-block cursor-default rounded-lg border border-[var(--border)] bg-[var(--background)]/80 px-3 py-1.5 text-sm text-[var(--foreground)]"
                    tabIndex={0}
                  >
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
              Contact
            </h2>
            <p className="mt-4 text-[var(--foreground)]">
              I&apos;d love to hear from you. Reach out for opportunities,
              collaboration, or just to say hi.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <a
                href="mailto:muhammad.murtaza5253@gmail.com"
                className="flex items-center gap-2.5 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                aria-label="Email"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                muhammad.murtaza5253@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/muhammad-murtaza-cs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                aria-label="LinkedIn profile"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/mm06369?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-lg border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                aria-label="GitHub profile"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-[var(--border)] px-6 py-8">
        <div className="mx-auto flex max-w-2xl items-center justify-between text-sm text-[var(--muted)]">
          <span>© {new Date().getFullYear()} Muhammad Murtaza</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </div>
  );
}
