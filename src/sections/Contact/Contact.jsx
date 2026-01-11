import Section from "../../Section.jsx";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="You can reach me Here.">
      <div className="card contactCard">
        <div className="contactIcons">
          <a
            href="mailto:melikebuyruk@outlook.com"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </Section>
  );
}
