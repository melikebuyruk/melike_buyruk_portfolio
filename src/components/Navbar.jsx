import { LINKS } from "../data/content";

export default function Navbar() {
  return (
    <header className="nav" id="top">
      <div className="navInner">
        <a className="brand" href="#top">
          <span className="brandMark">●</span>
          <span>YourName</span>
        </a>

        <nav className="navLinks">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="navCta" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
