import Section from "../components/Section.jsx";
import { EXPERIENCE } from "../data/content";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="Where I’ve worked and what I focused on."
    >
      <div className="timeline">
        {EXPERIENCE.map((job, index) => (
          <motion.div
            className="timelineItem"
            key={`${job.company}-${job.role}`}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="timelineLeft">
              <span className="timelineDot" />
              {index !== EXPERIENCE.length - 1 && (
                <span className="timelineLine" />
              )}
            </div>

            <div className={`timelineCard ${job.current ? "isCurrent" : ""}`}>
              <div className="timelineHeader">
                <div className="expTitleRow">
                  <h4>{job.role}</h4>
                  {job.current && (
                    <span className="currentBadge">Currently</span>
                  )}
                </div>

                <span className="timelinePeriod">{job.period}</span>
              </div>

              <p className="timelineCompany">
                {job.company} · {job.location}
              </p>

              {Array.isArray(job.tech) && job.tech.length > 0 && (
                <div className="techRow">
                  {job.tech.map((t) => (
                    <span key={t} className="techTag">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <ul className="timelineList">
                {job.details.map((d, i) => (
                  <li
                    key={i}
                    className={
                      typeof d === "object" && d.highlight ? "impactItem" : ""
                    }
                  >
                    {typeof d === "object" ? d.text : d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
