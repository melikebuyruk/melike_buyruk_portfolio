import { useMemo, useState } from "react";
import Section from "../components/Section.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { EXPERIENCE } from "../data/content.js";

export default function ExperienceSplit() {
  const defaultIndex = useMemo(() => {
    const i = EXPERIENCE.findIndex((x) => x.current);
    return i >= 0 ? i : 0;
  }, []);

  const [selected, setSelected] = useState(defaultIndex);
  const job = EXPERIENCE[selected];

  // Safety: in case EXPERIENCE is empty or index is invalid
  if (!job) {
    return (
      <Section
        id="experience"
        title="Work Experience"
        subtitle="My professional journey"
      >
        <div className="card">
          <p className="muted">No experience items found.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey"
    >
      <div className="expSplit">
        {/* LEFT LIST */}
        <aside className="expList" aria-label="Experience list">
          {EXPERIENCE.map((item, idx) => {
            const isActive = idx === selected;

            return (
              <button
                key={`${item.company}-${item.role}-${idx}`}
                className={`expListItem ${isActive ? "isActive" : ""}`}
                onClick={() => setSelected(idx)}
                type="button"
              >
                <span className="expLogo">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      loading="lazy"
                    />
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

        {/* RIGHT DETAIL (ANIMATED) */}
        <AnimatePresence mode="wait">
          <motion.article
            key={`${job.company}-${job.role}-${job.period}`}
            className="expDetail card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* TOP IMAGE (CROSSFADE) */}
            {Boolean(job.image) && (
              <a
                href={job.website}
                target="_blank"
                rel="noreferrer"
                className="expDetailImage"
                aria-label={`${job.company} website`}
                title={job.company}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={job.image}
                    src={job.image}
                    alt={job.company}
                    loading="eager"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 0.92, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </AnimatePresence>
              </a>
            )}

            <div className="expDetailContent">
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

              <ul className="expBullets">
                {job.details?.map((d, i) => (
                  <li key={i}>{typeof d === "object" ? d.text : d}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </Section>
  );
}
