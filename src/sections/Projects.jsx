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
            {p.focus && <span className="projectFocus">{p.focus}</span>}
            <h4>{p.title}</h4>
            <p className="muted">{p.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
