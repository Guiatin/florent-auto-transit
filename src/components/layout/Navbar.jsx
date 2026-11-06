import { useEffect, useState } from "react";
import { companyInfo } from "../../data/transitData";
import styles from "./Navbar.module.css";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Véhicules", href: "#vehicules" },
  { label: "Contact", href: "#contact" },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 3.5h-2A2.5 2.5 0 0 0 3 6.2c.4 6.9 5.9 12.4 12.8 12.8a2.5 2.5 0 0 0 2.7-2.5v-2a1.5 1.5 0 0 0-1.2-1.5l-2.6-.5a1.5 1.5 0 0 0-1.5.6l-.8 1a13 13 0 0 1-5.5-5.5l1-.8a1.5 1.5 0 0 0 .6-1.5l-.5-2.6a1.5 1.5 0 0 0-1.5-1.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#accueil" className={styles.brand} aria-label={`${companyInfo.brandName} — accueil`}>
          <span className={styles.logoMark} aria-hidden="true">
            <svg viewBox="0 0 44 44" fill="none">
              <path d="M22 2 40 12v20L22 42 4 32V12L22 2Z" stroke="currentColor" strokeWidth="1.1" />
              <path
                d="M16 29V15h12M16 22h9"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoName}>Florent</span>
            <span className={styles.logoSub}>Auto Transit</span>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Navigation principale">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href={companyInfo.phones[0].href}
            className={styles.callButton}
            aria-label={`Appeler ${companyInfo.brandName}`}
          >
            <PhoneIcon />
            Appeler
          </a>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className={styles.mobilePanel}>
          <nav className={styles.mobileNav} aria-label="Navigation mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={companyInfo.phones[0].href}
              className={`${styles.callButton} ${styles.mobileCall}`}
            >
              <PhoneIcon />
              Appel rapide
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
