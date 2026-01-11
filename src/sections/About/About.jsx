import Section from "../../Section.jsx";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="A bit about me and what I bring to the table."
    >
      <div className="grid2">
        <div className="card">
          <h4>Who I am</h4>
          <p className="muted">
            I’m a Computer Engineering graduate focused on front-end development
            and test automation. I enjoy building reliable, user-friendly web
            applications and working on systems where quality and performance
            matter. I’m aiming for roles where I can grow while contributing to
            impactful, scalable products.
          </p>
        </div>

        <div className="card">
          <h4>Highlights</h4>
          <ul className="list">
            <li>Front-end development with React</li>
            <li>Unit testing & automation mindset</li>
            <li>API testing, Docker, and SQL basics</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
