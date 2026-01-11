import { PROFILE } from "../data/content";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileArrowDown,
} from "react-icons/fa6";

export default function Hero() {
  const github = PROFILE.socials.find((s) => s.label === "GitHub")?.href;
  const linkedin = PROFILE.socials.find((s) => s.label === "LinkedIn")?.href;
  const email = PROFILE.socials.find((s) => s.label === "Email")?.href;

  return (
    <section className="hero">
      <div className="heroGrid">
        <div className="heroLeft">
          <p className="eyebrow">{PROFILE.location}</p>

          <h1>
            Hi, I’m <span className="accent">{PROFILE.name}</span>.
          </h1>

          <h3 className="muted">{PROFILE.role}</h3>
          <p className="lead">{PROFILE.tagline}</p>

          <div className="heroActions">
            <a className="btn" href="#projects">
              View Projects
            </a>

            <a
              className="btnGhost"
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download
              title="Download CV"
              aria-label="Download CV"
            >
              <span className="btnIcon">
                <FaFileArrowDown />
              </span>
              Download CV
            </a>
          </div>

          <div className="heroIconRow" aria-label="Social links">
            {email && (
              <a href={email} aria-label="Email" title="Email">
                <FaEnvelope />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        <div className="heroRight">
          <div className="glassCard">
            <div className="miniTitle">Currently</div>
            <div className="miniText">
              QA Engineer at Amadeus • Playwright automation • Scalable testing
            </div>

            <div className="divider" />

            <div className="miniTitle">Focus</div>
            <div className="pillRow">
              <span className="pill">Playwright</span>
              <span className="pill">Test Automation</span>
              <span className="pill">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
