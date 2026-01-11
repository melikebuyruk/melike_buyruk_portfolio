import Section from "../../Section.jsx";
import { CERTIFICATIONS } from "../../data/content.js";

export default function Certifications() {
  if (!CERTIFICATIONS?.length) return null;

  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications and technical credentials."
    >
      <div className="grid2">
        {CERTIFICATIONS.map((c) => (
          <div className="card" key={c.title}>
            <h4>{c.title}</h4>
            <p className="muted" style={{ marginTop: 6 }}>
              {c.issuer} · {c.year}
            </p>
            {c.note && (
              <p className="miniText" style={{ marginTop: 10 }}>
                {c.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
