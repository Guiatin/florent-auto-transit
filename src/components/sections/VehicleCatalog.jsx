import { Car, Info } from "lucide-react";
import { demoNotice, vehicles } from "../../data/transitData";
import styles from "./VehicleCatalog.module.css";

export default function VehicleCatalog() {
  return (
    <section id="vehicules" className={styles.catalog}>
      <div className="container">
        <header className={styles.head}>
          <p className={styles.eyebrow}>Catalogue</p>
          <h2 className={styles.title}>Des véhicules sélectionnés, cotés sur mesure.</h2>
          <p className={styles.lead}>
            Aperçu de démonstration de notre catalogue. Chaque véhicule réel fait l'objet d'un
            contrôle et d'une cotation personnalisée.
          </p>
        </header>

        <div className={styles.grid}>
          {vehicles.map((vehicle) => (
            <article key={vehicle.id} className={styles.card}>
              <div
                className={styles.media}
                style={{
                  backgroundImage: vehicle.image
                    ? `linear-gradient(180deg, rgba(6, 15, 31, 0.1), rgba(6, 15, 31, 0.8)), url("${vehicle.image}")`
                    : undefined,
                }}
              >
                <span className={styles.badge}>{vehicle.badge}</span>
                <Car className={styles.mediaIcon} strokeWidth={1} aria-hidden="true" />
              </div>

              <div className={styles.body}>
                <p className={styles.category}>{vehicle.category}</p>
                <h3 className={styles.name}>{vehicle.name}</h3>

                <ul className={styles.specs}>
                  {vehicle.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>

                <p className={styles.meta}>
                  {vehicle.year} · {vehicle.fuel} · {vehicle.transmission}
                </p>

                <div className={styles.footer}>
                  <span className={styles.price}>{vehicle.price}</span>
                  {vehicle.discount && <span className={styles.discount}>{vehicle.discount}</span>}
                </div>
              </div>

              <p className={styles.demo}>
                <Info size={14} strokeWidth={2} aria-hidden="true" />
                {demoNotice}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
