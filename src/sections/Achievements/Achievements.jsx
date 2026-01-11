import Section from "../../Section.jsx";
import { ACHIEVEMENTS } from "../../data/content.js";
import "./achievements.css";

export default function Achievements() {
  if (!ACHIEVEMENTS?.length) return null;

  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Academic awards and notable accomplishments."
    >
      <div className="grid2">
        {ACHIEVEMENTS.map((a) => (
          <div className="card" key={a.title}>
            <div className="miniTitle">{a.year}</div>
            <h4 style={{ marginTop: 6 }}>{a.title}</h4>
            <p className="miniText">{a.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
