import Section from "../components/Section.jsx";
import { SKILLS } from "../data/content";

export default function Skills() {
  const groups = [
    { title: "Front-end", items: SKILLS.frontend },
    { title: "Back-end", items: SKILLS.backend },
    { title: "Testing & QA", items: SKILLS.testing },
    { title: "Tools", items: SKILLS.tools },
    { title: "Databases & Cloud", items: SKILLS.databases },
    { title: "Methodologies", items: SKILLS.methodologies },
    { title: "Languages", items: SKILLS.languages },
  ].filter((g) => Array.isArray(g.items) && g.items.length > 0);

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools, frameworks, and methodologies I use to build and ship reliable software."
    >
      <div className="skillGroups">
        {groups.map((g) => (
          <div className="card" key={g.title}>
            <h4>{g.title}</h4>
            <div className="chipGrid" style={{ marginTop: 12 }}>
              {g.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
