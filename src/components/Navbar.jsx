import { useEffect, useMemo, useState } from "react";
import { LINKS } from "../data/content";

export default function Navbar() {
  const [active, setActive] = useState("#top");

  const allLinks = useMemo(() => {
    const contact = { href: "#contact", label: "Contact" };
    const hasContact = LINKS.some((l) => l.href === "#contact");
    return hasContact ? LINKS : [...LINKS, contact];
  }, []);

  useEffect(() => {
    const ids = ["top", ...allLinks.map((l) => l.href.replace("#", ""))];

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Ekranda olanlar arasından en görünür olanı seç
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (!visible?.target?.id) return;
        setActive(`#${visible.target.id}`);
      },
      {
        root: null,
        // navbar yüksekliği var: section’lar biraz yukarıdan “aktif” sayılsın
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [allLinks]);

  const handleClick = (href) => {
    // tıklayınca anında highlight (observer sonra zaten günceller)
    setActive(href);
  };

  return (
    <header className="nav" id="top">
      <div className="navInner">
        <a className="brand" href="#top" onClick={() => handleClick("#top")}>
          <span className="brandMark">●</span>
          <span>Melike Buyruk</span>
        </a>

        <nav className="navLinks">
          {allLinks
            .filter((l) => l.href !== "#contact")
            .map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleClick(l.href)}
                className={active === l.href ? "activeLink" : ""}
              >
                {l.label}
              </a>
            ))}

          <a
            className={`navCta ${active === "#contact" ? "activeCta" : ""}`}
            href="#contact"
            onClick={() => handleClick("#contact")}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
