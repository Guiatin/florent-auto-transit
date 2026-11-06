import { companyInfo } from "../../data/transitData";
import styles from "./Footer.module.css";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Véhicules", href: "#vehicules" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>
            Florent <span>Auto Transit</span>
          </p>
          <p className={styles.tagline}>{companyInfo.tagline}</p>
          <p className={styles.corridor}>{companyInfo.corridor}</p>
        </div>

        <nav className={styles.column} aria-label="Navigation de pied de page">
          <h2 className={styles.heading}>Navigation</h2>
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.column}>
          <h2 className={styles.heading}>Contact</h2>
          <ul className={styles.list}>
            {companyInfo.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href}>{phone.display}</a>
              </li>
            ))}
            <li>{companyInfo.base}</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.heading}>Horaires</h2>
          <ul className={styles.list}>
            <li>Lun – Ven · 08h00 – 18h00</li>
            <li>Samedi · 08h00 – 13h00</li>
            <li>Dimanche · Fermé</li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>Données de démonstration — Florent Auto Transit © 2026</p>
        <p>
          {companyInfo.corridorFrom} · {companyInfo.corridorTo}
        </p>
      </div>
    </footer>
  );
}
