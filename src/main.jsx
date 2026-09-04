import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import * as Switch from "@radix-ui/react-switch";
import {
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Building2,
  ExternalLink,
  FileText,
  Fingerprint,
  GitFork,
  GraduationCap,
  Mail,
  MapPin,
  Moon,
  Send,
  Sun,
} from "lucide-react";
import "@fontsource-variable/manrope";
import "@fontsource-variable/bricolage-grotesque";
import {
  blenderRenders,
  blenderWorks,
  education,
  explorations,
  news,
  positions,
  profile,
  publications,
} from "./content";
import "./styles.css";

const navigation = [
  ["Publications", "/#publications"],
  ["Experience", "/#experience"],
];

function ExternalMark() {
  return <ExternalLink aria-hidden="true" size={11} strokeWidth={1.8} />;
}

function AuthorNames({ publication }) {
  // Keep the original punctuation and use publication-specific links to avoid
  // confusing different authors who share the same initials.
  return publication.authors.split(/(,\s*(?:and\s+)?|\s+and\s+)/).map((part, index) => {
    const isSelf = part === "X. Liu";
    const href = isSelf ? "/#top" : publication.authorLinks?.[part];
    const name = isSelf ? <strong>{part}</strong> : part;

    return href ? (
      <a
        className="author-link"
        href={href}
        key={index}
        target={isSelf ? undefined : "_blank"}
        rel={isSelf ? undefined : "noopener noreferrer"}
      >
        {name}
      </a>
    ) : <React.Fragment key={index}>{name}</React.Fragment>;
  });
}

function ProfileIcon({ label }) {
  const icons = {
    Email: Mail,
    ORCID: Fingerprint,
    "Google Scholar": GraduationCap,
    "IVC Profile": Building2,
    GitHub: GitFork,
  };
  const Icon = icons[label] ?? ExternalLink;
  return <Icon aria-hidden="true" size={13} strokeWidth={1.8} />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <a className="site-name name-wordmark" href="/" onClick={() => setOpen(false)}><span className="name-given">Xing</span>{" "}<span className="name-family">Liu</span></a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="/cv">CV</a>
          <div className="theme-control" aria-label="Color theme">
            <Sun aria-hidden="true" size={13} />
            <Switch.Root
              className="theme-switch"
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              <Switch.Thumb className="theme-switch-thumb" />
            </Switch.Root>
            <Moon aria-hidden="true" size={13} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function Portrait() {
  if (profile.portrait) {
    return <img className="portrait" src={profile.portrait} alt={`Portrait of ${profile.name}`} />;
  }
  return <div className="portrait portrait-placeholder" aria-label="Portrait placeholder"><span>Photo</span></div>;
}

function Section({ id, label, icon: Icon, children }) {
  return (
    <section className="content-section" id={id}>
      <h2 className="section-label">{Icon && <Icon aria-hidden="true" size={14} />}{label}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function InstitutionName({ item }) {
  return item.href ? (
    <a className="institution-link" href={item.href} target="_blank" rel="noreferrer">
      {item.institution}<ExternalMark />
    </a>
  ) : item.institution;
}

function HomePage() {
  const visibleExplorations = explorations.filter((item) => item.visible !== false);

  return (
    <>
      <Header />
      <main className="page-width" id="top">
        <section className="intro-section">
          <Portrait />
          <div className="intro-copy">
            <p className="location"><MapPin aria-hidden="true" size={13} />{profile.location}</p>
            <h1 className="profile-name">
              <span className="profile-hello">Hi, I’m</span>
              <span className="profile-identity">
                <strong className="name-wordmark"><span className="name-given">Xing</span>{" "}<span className="name-family">Liu</span></strong>
                <span className="profile-name-divider" aria-hidden="true">/</span>
                <span className="profile-name-cn" lang="zh-CN">刘杏</span>
                <span className="profile-greeting-emoji" aria-hidden="true">👋</span>
              </span>
            </h1>
            <p className="bio">
              I’m a first-year Ph.D. student at TU Graz, supervised by{" "}
              {profile.supervisors.map((supervisor, index) => (
                <React.Fragment key={supervisor.name}>
                  {index > 0 && " and "}
                  <a className="supervisor-link" href={supervisor.href} target="_blank" rel="noreferrer">
                    {supervisor.name}<ExternalMark />
                  </a>
                </React.Fragment>
              ))}. {profile.backgroundBio}
            </p>
            <p className="bio" id="research">{profile.researchSummary}</p>
            <p className="bio">
              {profile.collaborationNote}{" "}
              <a className="supervisor-link" href={`mailto:${profile.email}`}>Feel free to get in touch!</a>
            </p>
            <div className="profile-links" aria-label="Profile links">
              {profile.links.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <ProfileIcon label={link.label} />{link.label}{link.href.startsWith("http") && <ExternalMark />}
                </a>
              ))}
              <a href="/cv"><FileText aria-hidden="true" size={13} strokeWidth={1.8} />CV</a>
            </div>
          </div>
        </section>

        <Section id="publications" label="Publications" icon={BookOpen}>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.doi ?? publication.title}>
                <span className="publication-venue-ribbon">{publication.venueLabel} {publication.year}</span>
                <PublicationProjectLink publication={publication} className="publication-image-link" aria-label={`View project page for ${publication.title}`}>
                  {publication.image ? (
                    <img className="publication-image" src={publication.image} alt={`Figure for ${publication.title}`} />
                  ) : (
                    <div className="publication-image image-placeholder" aria-label="Publication image placeholder">
                      <span>{publication.short}</span>
                      <small>Figure to be added</small>
                    </div>
                  )}
                </PublicationProjectLink>
                <div className="publication-copy">
                  <h3><PublicationProjectLink publication={publication} className="publication-title-link">{publication.title}</PublicationProjectLink></h3>
                  {publication.award && <p className="publication-award">🏅 {publication.award}</p>}
                  <div className="publication-tags" aria-label="Research topics">
                    {publication.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <p className="authors">
                    <AuthorNames publication={publication} />
                  </p>
                  {publication.publicationStatus && <p className="venue">{publication.publicationStatus}</p>}
                  <div className="publication-links">
                    {publication.projectPageAvailable !== false && (
                      <a href={`/publications/${publication.slug}`}>
                        <BookOpen aria-hidden="true" size={15} strokeWidth={1.7} />
                        Project page
                      </a>
                    )}
                    <a href={publication.href ?? `https://doi.org/${publication.doi}`} target="_blank" rel="noreferrer">
                      <ExternalLink aria-hidden="true" size={15} strokeWidth={1.7} />
                      {publication.linkLabel ?? "DOI"}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" label="Experience" icon={BriefcaseBusiness}>
          <div className="experience-columns">
            <div className="experience-group">
              <h3 className="group-title"><span><GraduationCap aria-hidden="true" size={14} /></span> Education</h3>
              <div className="timeline-list">
                {education.map((item) => (
                  <article className="timeline-item" key={`${item.period}-${item.degree}`}>
                    <p className="timeline-period">{item.period}</p>
                    <div>
                      <h3>{item.degree}</h3>
                      <p><InstitutionName item={item} /> · {item.location}</p>
                      <p className="timeline-detail">{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="experience-group">
              <h3 className="group-title"><span><BriefcaseBusiness aria-hidden="true" size={14} /></span> Positions</h3>
              <div className="timeline-list">
                {positions.map((item) => (
                  <article className="timeline-item" key={`${item.period}-${item.role}`}>
                    <p className="timeline-period">{item.period}</p>
                    <div>
                      <h3>{item.role}</h3>
                      <p><InstitutionName item={item} /> · {item.location}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {news.length > 0 && (
          <Section id="news" label="News" icon={BookOpen}>
            <div className="news-list">
              {news.map((item) => (
                <div className="news-item" key={`${item.date}-${item.text}`}>
                  <time>{item.date}</time>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {visibleExplorations.length > 0 && (
          <Section id="explorations" label="Creative Explorations" icon={Boxes}>
            <div className="exploration-list">
              {visibleExplorations.map((item) => (
                <article className={item.image ? "exploration is-featured" : "exploration"} key={item.title}>
                  {item.image && <img className="exploration-image" src={item.image} alt={`${item.title} award listing`} />}
                  <div className="exploration-copy">
                    <p className="exploration-label">{item.label}</p>
                    <h3>{item.href ? <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.title} <ExternalMark /></a> : item.title}</h3>
                    <p>{item.text}</p>
                    {item.href && item.showCta !== false && <a className="exploration-cta" href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.cta ?? "View collection"} <span aria-hidden="true">→</span></a>}
                  </div>
                </article>
              ))}
            </div>
          </Section>
        )}

        <section className="contact-section">
          <p><Send aria-hidden="true" size={13} />Contact</p>
          <a href={`mailto:${profile.email}`}>{profile.email} <ExternalMark /></a>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-width">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.institute} · TU Graz</span>
        </div>
      </footer>
    </>
  );
}

function BlenderPage() {
  useEffect(() => {
    document.title = `${profile.name} — Blender Explorations`;
  }, []);

  return (
    <>
      <Header />
      <main className="page-width blender-page" id="top">
        <a className="back-link" href="/">← Back to homepage</a>
        <header className="blender-hero">
          <p className="location"><Boxes aria-hidden="true" size={15} />Creative practice · Blender</p>
          <h1>Physics in motion.</h1>
          <p>A collection of physics animation studies created in Blender, exploring rigid bodies, cloth, smoke, soft bodies, and fluids.</p>
        </header>

        <Section id="animations" label="Physics Animations" icon={Boxes}>
          <div className="blender-grid">
            {blenderWorks.map((work) => (
              <article className="blender-card" key={`${work.category}-${work.index}`}>
                {work.video ? (
                  <video controls preload="metadata" poster={work.preview}>
                    <source src={work.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={work.preview} alt={`${work.category} Blender study`} />
                )}
                <div className="blender-card-copy">
                  <p>{work.video ? "Animation" : "Still image"} · {work.index}</p>
                  <h3>{work.category}</h3>
                  {!work.video && <span>Video unavailable on the previous site</span>}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="renders" label="Renders" icon={Boxes}>
          <div className="render-grid">
            {blenderRenders.map((render) => (
              <figure className="render-card" key={render.title}>
                <img src={render.image} alt={`${render.title} Blender render`} />
                <figcaption><span>{render.category}</span><strong>{render.title}</strong></figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </main>
      <footer className="site-footer">
        <div className="page-width"><span>© {new Date().getFullYear()} {profile.name}</span><span>Blender explorations</span></div>
      </footer>
    </>
  );
}

function CvPage() {
  useEffect(() => {
    document.title = `${profile.name} - Curriculum Vitae`;
  }, []);

  const publicCvUrl = new URL(profile.cv, window.location.origin).href;
  const googlePreviewUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(publicCvUrl)}`;
  const isLocalPreview = ["localhost", "127.0.0.1"].includes(window.location.hostname);
  const previewUrl = isLocalPreview ? `${profile.cv}#view=FitH&toolbar=1` : googlePreviewUrl;

  return (
    <>
      <Header />
      <main className="page-width cv-page" id="top">
        <section className="cv-viewer-shell" aria-label="CV preview">
          <iframe
            className="cv-viewer"
            src={previewUrl}
            title={`${profile.name} curriculum vitae`}
          />
        </section>
      </main>
    </>
  );
}

function PublicationProjectLink({ publication, children, className, ...props }) {
  if (publication.projectPageAvailable === false) return <span className={className}>{children}</span>;
  return <a className={className} href={`/publications/${publication.slug}`} {...props}>{children}</a>;
}

function PublicationPage({ publication }) {
  useEffect(() => {
    document.title = `${publication.title} - ${profile.name}`;
  }, [publication.title]);

  const externalUrl = publication.href ?? (publication.doi ? `https://doi.org/${publication.doi}` : null);
  const relatedPublications = publications.filter((item) => item.slug !== publication.slug && item.projectPageAvailable !== false);
  const figures = (publication.figures ?? [{ src: publication.image, alt: `Project figure for ${publication.title}`, caption: publication.summary }])
    .map((figure, index) => ({ ...figure, paperFigure: figure.paperFigure ?? index + 1 }))
    .filter((figure) => figure.visible !== false);
  const additionalFigures = figures.slice(1);
  const abstractParagraphs = Array.isArray(publication.abstract) ? publication.abstract : [publication.abstract ?? publication.summary];

  return (
    <>
      <Header />
      <main className="page-width publication-page" id="top">
        <a className="back-link" href="/#publications">← Back to publications</a>

        <article className="publication-project">
          <header className="publication-project-header">
            <p className="project-meta">
              <span className="project-eyebrow">Publication</span>
              {" · "}{publication.venue}
              {publication.publicationStatus && !publication.venue.toLowerCase().includes(publication.publicationStatus.toLowerCase()) && (
                <> · {publication.publicationStatus}</>
              )}
            </p>
            <h1>{publication.title}</h1>
            {publication.award && <p className="publication-award">🏅 {publication.award}</p>}
            <p className="project-authors"><AuthorNames publication={publication} /></p>
            <div className="publication-tags" aria-label="Research topics">
              {publication.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="project-actions">
              {publication.doi ? (
                <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noreferrer">
                  DOI: {publication.doi} <ExternalMark />
                </a>
              ) : externalUrl && (
                <a href={externalUrl} target="_blank" rel="noreferrer">
                  {publication.linkLabel ?? "Website"} <ExternalMark />
                </a>
              )}
            </div>
          </header>

          <figure className="project-lead-figure">
            <img src={figures[0].src} alt={figures[0].alt} />
            <figcaption><span>Figure {String(figures[0].paperFigure ?? 1).padStart(2, "0")}</span>{(!publication.originalContentOnly || figures[0].originalCaption) && <p>{figures[0].caption}</p>}</figcaption>
          </figure>

          <section className="project-content-section project-abstract-section" aria-labelledby="project-abstract-title">
            <div className="project-section-heading">
              <h2 id="project-abstract-title">Abstract</h2>
            </div>
            <div className="project-abstract-copy">
              {abstractParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          {!publication.originalContentOnly && publication.researchDetails && (
            <section className="project-research-section" aria-labelledby="project-research-title">
              <div className="project-section-heading">
                <p className="project-detail-label">Inside the work</p>
                <h2 id="project-research-title">Research details</h2>
              </div>
              <div className="project-research-grid">
                {publication.researchDetails.map((detail) => (
                  <article key={detail.label}>
                    <h3>{detail.label}</h3>
                    <p>{detail.text}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {additionalFigures.length > 0 && (
            <section className="project-visuals-section" aria-labelledby="project-visuals-title">
              <div className="project-section-heading">
                <h2 id="project-visuals-title">More Details</h2>
              </div>
              <div className="project-figure-grid">
                {additionalFigures.map((figure, index) => (
                  <figure key={figure.src} className={figure.portrait ? "project-figure-portrait" : undefined}>
                    <img src={figure.src} alt={figure.alt} />
                    <figcaption><span>Figure {String(figure.paperFigure ?? index + 2).padStart(2, "0")}</span>{(!publication.originalContentOnly || figure.originalCaption) && <p>{figure.caption}</p>}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {!publication.originalContentOnly && <section className="project-content-section project-contributions-section" aria-labelledby="project-highlights-title">
            <div className="project-section-heading">
              <p className="project-detail-label">What it contributes</p>
              <h2 id="project-highlights-title">Key contributions</h2>
            </div>
            <ol className="project-highlight-list">
              {publication.highlights.map((highlight, index) => (
                <li key={highlight}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{highlight}</p>
                </li>
              ))}
            </ol>
          </section>}
        </article>

        <section className="related-publications" aria-labelledby="related-publications-title">
          <div className="related-publications-heading">
            <h2 id="related-publications-title">More publications</h2>
          </div>
          <div className="related-publication-list">
            {relatedPublications.map((item) => (
              <a href={`/publications/${item.slug}`} key={item.slug}>
                <span className="related-publication-copy">
                  <strong>{item.title}</strong>
                  <span className="related-publication-meta">{item.venueLabel} · {item.year}</span>
                </span>
                <small aria-hidden="true">→</small>
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-width"><span>© {new Date().getFullYear()} {profile.name}</span><span>Research publication</span></div>
      </footer>
    </>
  );
}

function App() {
  if (window.location.pathname === "/cv") return <CvPage />;
  if (window.location.pathname === "/blender") return <BlenderPage />;
  const publicationSlug = window.location.pathname.match(/^\/publications\/([^/]+)\/?$/)?.[1];
  const publication = publications.find((item) => item.slug === publicationSlug);
  if (publication && publication.projectPageAvailable !== false) return <PublicationPage publication={publication} />;
  return <HomePage />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
