import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  journey,
  profile,
  projects,
  publications,
  researchThemes,
} from "./content";
import "./styles.css";

const navItems = [
  ["Research", "#research"],
  ["Work", "#work"],
  ["Publications", "#publications"],
  ["Background", "#background"],
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function GazeVisual() {
  return (
    <div className="gaze-visual" aria-hidden="true">
      <div className="gaze-grid" />
      <svg viewBox="0 0 640 420" role="presentation">
        <defs>
          <linearGradient id="gazeLine" x1="0" x2="1">
            <stop offset="0" stopColor="#73d6d0" stopOpacity="0.2" />
            <stop offset="0.55" stopColor="#26a9a4" />
            <stop offset="1" stopColor="#122f44" />
          </linearGradient>
        </defs>
        <path
          className="gaze-path gaze-path-muted"
          d="M32 330 C110 322 142 180 228 206 S348 334 424 224 S510 80 608 104"
        />
        <path
          className="gaze-path gaze-path-active"
          d="M32 330 C110 322 142 180 228 206 S348 334 424 224 S510 80 608 104"
        />
        {[
          [32, 330, 5],
          [134, 245, 7],
          [228, 206, 6],
          [342, 292, 8],
          [424, 224, 6],
          [512, 112, 8],
          [608, 104, 5],
        ].map(([cx, cy, r], index) => (
          <g key={index}>
            <circle cx={cx} cy={cy} r={r + 9} className="gaze-ring" />
            <circle cx={cx} cy={cy} r={r} className="gaze-dot" />
          </g>
        ))}
      </svg>
      <div className="visual-label visual-label-top">observed gaze</div>
      <div className="visual-label visual-label-bottom">causal prediction</div>
      <div className="visual-index">gaze / motion / time</div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Xing Liu, home">
        <span>XL</span>
        <span className="wordmark-name">Xing Liu</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-contact" href={`mailto:${profile.email}`}>
          Contact <Arrow diagonal />
        </a>
      </nav>
    </header>
  );
}

function SectionHeading({ index, eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <section className="hero shell">
          <div className="hero-copy reveal">
            <p className="hero-meta">
              {profile.role} <span>·</span> {profile.location}
            </p>
            <h1>
              Gaze, motion,
              <br />
              and <em>wearable XR.</em>
            </h1>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-links">
              <a className="primary-link" href="#research">
                Explore my research <Arrow />
              </a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
          <div className="hero-art reveal">
            <GazeVisual />
          </div>
          <div className="hero-foot reveal">
            <span>{profile.affiliation}</span>
            <span className="scroll-note">Scroll to explore ↓</span>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="shell">
            <SectionHeading
              index="01"
              eyebrow="Research"
              title="Computational gaze modeling under real-world constraints."
              text={profile.perspective}
            />
            <div className="theme-list">
              {researchThemes.map((theme) => (
                <article className="theme-row reveal" key={theme.index}>
                  <span className="theme-index">{theme.index}</span>
                  <h3>{theme.title}</h3>
                  <p>{theme.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="shell">
            <SectionHeading
              index="02"
              eyebrow="Selected work"
              title="Research shaped by systems, sensing, and interaction."
            />
            <div className="project-grid">
              {projects.map((project, index) => {
                const Tag = project.href ? "a" : "article";
                return (
                  <Tag
                    className={`project-card project-${project.accent} reveal`}
                    href={project.href}
                    target={project.href ? "_blank" : undefined}
                    rel={project.href ? "noreferrer" : undefined}
                    key={project.title}
                  >
                    <div className="project-topline">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {project.href && <Arrow diagonal />}
                    </div>
                    <div className="project-signal" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </Tag>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="shell">
            <SectionHeading
              index="03"
              eyebrow="Publications"
              title="Peer-reviewed work across AR and human–computer interaction."
            />
            <div className="publication-list">
              {publications.map((publication) => (
                <a
                  className="publication reveal"
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                  key={publication.doi}
                >
                  <span className="publication-year">{publication.year}</span>
                  <div>
                    <h3>{publication.title}</h3>
                    <p className="publication-authors">{publication.authors}</p>
                    <p className="publication-venue">{publication.venue}</p>
                  </div>
                  <span className="publication-arrow"><Arrow diagonal /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section background-section" id="background">
          <div className="shell background-layout">
            <SectionHeading
              index="04"
              eyebrow="Background"
              title="From electronic engineering to interactive visual computing."
            />
            <div className="journey-list">
              {journey.map((item) => (
                <article className="journey-item reveal" key={`${item.label}-${item.title}`}>
                  <span>{item.label}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-layout reveal">
            <div>
              <p className="contact-kicker">Let’s connect</p>
              <h2>Interested in gaze, XR, or interactive systems?</h2>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email} <Arrow diagonal />
              </a>
              <div className="social-links">
                {profile.links.slice(1).map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                    {link.label} <Arrow diagonal />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell">
          <span>© {new Date().getFullYear()} Xing Liu</span>
          <span>Built with care in Graz.</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
