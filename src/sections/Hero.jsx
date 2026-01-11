import { PROFILE } from "../data/content";

export default function Hero() {
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
            <a className="btnGhost" href="#about">
              About Me
            </a>
          </div>

          <div className="socialRow">
            {PROFILE.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="heroRight">
          <div className="glassCard">
            <div className="miniTitle">Currently</div>
            <div className="miniText">Currently</div>

            <div className="divider" />

            <div className="miniTitle">Focus</div>
            <div className="pillRow">
              <span className="pill">React</span>
              <span className="pill">Testing</span>
              <span className="pill">Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
