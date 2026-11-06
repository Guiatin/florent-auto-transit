import { Globe, ShieldCheck, Truck } from "lucide-react";
import { services } from "../../data/transitData";
import styles from "./Services.module.css";

const icons = {
  transit: Truck,
  importation: Globe,
  equipement: ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <header className={styles.head}>
          <p className={styles.eyebrow}>Prestations</p>
          <h2 className={styles.title}>Trois métiers, une seule chaîne de confiance.</h2>
          <p className={styles.lead}>
            De l'achat à la livraison, chaque étape de votre véhicule reste pilotée par la même
            équipe.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = icons[service.id];

            return (
              <article key={service.id} className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon strokeWidth={1.6} />
                </span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.description}</p>
                <ul className={styles.points}>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
