import { companyInfo, vehicles } from "../../data/transitData";
import styles from "./HeroSection.module.css";

const featured = vehicles[0];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PradoIllustration() {
  return (
    <svg
      viewBox="0 0 680 300"
      role="img"
      aria-label={`Illustration ${featured.name}, véhicule de démonstration`}
    >
      <defs>
        <linearGradient id="pradoBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7F3EA" stopOpacity="0.13" />
          <stop offset="1" stopColor="#D4AF37" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="pradoLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#D4AF37" stopOpacity="0.4" />
          <stop offset="0.5" stopColor="#E8CD7A" />
          <stop offset="1" stopColor="#D4AF37" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <ellipse cx="340" cy="266" rx="238" ry="12" fill="#D4AF37" opacity="0.07" />
      <line x1="40" y1="262" x2="640" y2="262" stroke="#D4AF37" strokeOpacity="0.2" />

      <path
        d="M120 214v-20c0-14 10-23 26-26l56-8 42-42c12-14 26-20 44-20h132c18 0 32 8 42 22l36 44 46 8c16 3 26 14 26 28v14H120Z"
        fill="url(#pradoBody)"
        stroke="url(#pradoLine)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      <path d="M246 162l40-40h252l34 40Z" fill="#F7F3EA" fillOpacity="0.04" />
      <path d="M252 158l34-32h52v32Z" fill="#F7F3EA" fillOpacity="0.08" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="1.2" />
      <path d="M352 158v-32h56v32Z" fill="#F7F3EA" fillOpacity="0.08" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="1.2" />
      <path d="M422 158v-32h52l28 32Z" fill="#F7F3EA" fillOpacity="0.08" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="1.2" />

      <line x1="346" y1="162" x2="346" y2="210" stroke="#D4AF37" strokeOpacity="0.3" strokeWidth="1.2" />
      <line x1="418" y1="162" x2="418" y2="210" stroke="#D4AF37" strokeOpacity="0.2" strokeWidth="1.2" />

      <rect x="292" y="176" width="24" height="4" rx="2" fill="#E8CD7A" opacity="0.7" />
      <rect x="366" y="176" width="24" height="4" rx="2" fill="#E8CD7A" opacity="0.7" />

      <path d="M548 190h16v10h-16Z" fill="#E8CD7A" opacity="0.8" />
      <path d="M122 188h14v9h-14Z" fill="#D4AF37" opacity="0.55" />

      <path d="M202 214a46 46 0 0 1 92 0" stroke="#E8CD7A" strokeOpacity="0.6" strokeWidth="1.6" fill="none" />
      <path d="M440 214a46 46 0 0 1 92 0" stroke="#E8CD7A" strokeOpacity="0.6" strokeWidth="1.6" fill="none" />

      <circle cx="248" cy="214" r="46" fill="#060F1F" stroke="#D4AF37" strokeWidth="2.4" />
      <circle cx="248" cy="214" r="25" fill="none" stroke="#D4AF37" strokeOpacity="0.7" strokeWidth="1.2" />
      <circle cx="248" cy="214" r="7" fill="#D4AF37" opacity="0.75" />

      <circle cx="486" cy="214" r="46" fill="#060F1F" stroke="#D4AF37" strokeWidth="2.4" />
      <circle cx="486" cy="214" r="25" fill="none" stroke="#D4AF37" strokeOpacity="0.7" strokeWidth="1.2" />
      <circle cx="486" cy="214" r="7" fill="#D4AF37" opacity="0.75" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section id="accueil" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Transit international · {companyInfo.corridor}
          </p>

          <h1 className={styles.title}>
            Le corridor <span className={styles.accent}>Ouaga – Lomé</span>, maîtrisé de bout en bout.
          </h1>

          <p className={styles.lead}>
            {companyInfo.brandName} sécurise l'achat, le dédouanement et l'acheminement de votre
            véhicule entre {companyInfo.corridorFrom} et {companyInfo.corridorTo}. Un interlocuteur
            unique, un suivi transparent, une livraison sans surprise.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primary}>
              Demander une cotation
              <ArrowIcon />
            </a>
            <a href="#vehicules" className={styles.secondary}>
              Voir le catalogue
            </a>
          </div>

          <dl className={styles.facts}>
            <div>
              <dt>Gérant</dt>
              <dd>{companyInfo.manager}</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>{companyInfo.base}</dd>
            </div>
            <div>
              <dt>Corridor</dt>
              <dd>{companyInfo.corridor}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.visual}>
          <article className={styles.vehicleCard}>
            <div className={styles.cardHead}>
              <span className={styles.badge}>{featured.badge}</span>
              <span className={styles.corridorTag}>Ouaga → Lomé</span>
            </div>

            <div className={styles.illustration}>
              <PradoIllustration />
            </div>

            <div className={styles.cardBody}>
              <p className={styles.category}>{featured.category}</p>
              <h2 className={styles.vehicleName}>{featured.name}</h2>
              <ul className={styles.specs}>
                {featured.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <div className={styles.cardFooter}>
                <span className={styles.priceLabel}>Cotation</span>
                <span className={styles.price}>{featured.price}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
