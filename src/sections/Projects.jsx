import Section from "../components/Section.jsx";
import { PROJECTS } from "../data/content";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few things I’ve built—focused on reliability, automation, and solid user experience."
    >
      <div className="cards3">
        {PROJECTS.map((p) => (
          <article key={p.title} className="card">
            <h4>{p.title}</h4>
            <p className="muted">{p.desc}</p>

            {Array.isArray(p.tags) && p.tags.length > 0 && (
              <div className="tagRow">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {Array.isArray(p.links) && p.links.length > 0 && (
              <div className="linkRow">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
