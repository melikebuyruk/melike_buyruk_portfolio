import { useMemo, useState } from "react";
import Section from "../components/Section.jsx";
import { EXPERIENCE } from "../data/content.js";

export default function ExperienceSplit() {
  const defaultIndex = useMemo(() => {
    const i = EXPERIENCE.findIndex((x) => x.current);
    return i >= 0 ? i : 0;
  }, []);

  const [selected, setSelected] = useState(defaultIndex);
  const job = EXPERIENCE[selected];

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey"
    >
      <div className="expSplit">
        <aside className="expList" aria-label="Experience list">
          {EXPERIENCE.map((item, idx) => {
            const isActive = idx === selected;
            return (
              <button
                key={`${item.company}-${item.role}`}
                className={`expListItem ${isActive ? "isActive" : ""}`}
                onClick={() => setSelected(idx)}
                type="button"
              >
                <span className="expLogo">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.company} logo`} />
                  ) : (
                    <span className="expLogoFallback">
                      {item.company?.charAt(0)}
                    </span>
                  )}
                </span>

                <span className="expListText">
                  <span className="expListRole">
                    {item.role}
                    {item.current ? (
                      <span className="expNowBadge">Currently</span>
                    ) : null}
                  </span>
                  <span className="expListCompany">{item.company}</span>
                </span>
              </button>
            );
          })}
        </aside>

        <article className="expDetail card">
          <div className="expDetailTop">
            <div className="expDetailTitleRow">
              <h3 className="expDetailTitle">{job.role}</h3>
              {job.website && (
                <a
                  className="expCompanyLink"
                  href={job.website}
                  target="_blank"
                  rel="noreferrer"
                  title="Company website"
                >
                  {job.company} ↗
                </a>
              )}
            </div>

            <div className="expMeta">
              <span>{job.period}</span>
              <span className="expDot">•</span>
              <span>{job.location}</span>
            </div>

            {Array.isArray(job.tech) && job.tech.length > 0 && (
              <div className="techRow">
                {job.tech.map((t) => (
                  <span key={t} className="techTag">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <ul className="expBullets">
            {job.details.map((d, i) => (
              <li key={i}>{typeof d === "object" ? d.text : d}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
