import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { LINKS } from "../data/content";

export default function Navbar() {
  const [active, setActive] = useState("#top");
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  const navRef = useRef(null);
  const linkRefs = useRef({});

  const allLinks = useMemo(() => {
    const contact = { href: "#contact", label: "Contact" };
    const hasContact = LINKS.some((l) => l.href === "#contact");
    return hasContact ? LINKS : [...LINKS, contact];
  }, []);

  const measurePill = () => {
    const navEl = navRef.current;
    const activeEl = linkRefs.current[active];

    if (!navEl || !activeEl) {
      setPill((p) => ({ ...p, opacity: 0 }));
      return;
    }

    const navRect = navEl.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();

    const left = elRect.left - navRect.left;
    const width = elRect.width;

    setPill({ left, width, opacity: 1 });
  };

  useLayoutEffect(() => {
    measurePill();
  }, [active]);

  useEffect(() => {
    const onResize = () => measurePill();
    window.addEventListener("resize", onResize);

    if (document?.fonts?.ready) {
      document.fonts.ready.then(() => measurePill());
    }

    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  useEffect(() => {
    const ids = ["top", ...allLinks.map((l) => l.href.replace("#", ""))];

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    let rafId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (rafId) cancelAnimationFrame(rafId);

        rafId = requestAnimationFrame(() => {
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length === 0) return;

          const best = visible
            .map((e) => ({
              id: e.target.id,
              top: e.boundingClientRect.top,
              absTop: Math.abs(e.boundingClientRect.top),
            }))
            .sort((a, b) => a.absTop - b.absTop)[0];

          if (!best?.id) return;
          setActive(`#${best.id}`);
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [allLinks]);

  const handleClick = (href) => {
    setActive(href);
  };

  return (
    <header className="nav" id="top">
      <div className="navInner">
        <a className="brand" href="#top" onClick={() => handleClick("#top")}>
          <span className="brandMark">●</span>
          <span>Melike Buyruk</span>
        </a>

        <nav className="navLinks navLinksPill" ref={navRef}>
          <span
            className="navPill"
            style={{
              transform: `translateX(${pill.left}px)`,
              width: `${pill.width}px`,
              opacity: pill.opacity,
            }}
          />

          {allLinks
            .filter((l) => l.href !== "#contact")
            .map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleClick(l.href)}
                ref={(el) => {
                  if (el) linkRefs.current[l.href] = el;
                }}
                className={`navLink ${active === l.href ? "isActive" : ""}`}
              >
                {l.label}
              </a>
            ))}

          <a
            href="#contact"
            onClick={() => handleClick("#contact")}
            ref={(el) => {
              if (el) linkRefs.current["#contact"] = el;
            }}
            className={`navCta navLink ${
              active === "#contact" ? "isActiveCta" : ""
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
