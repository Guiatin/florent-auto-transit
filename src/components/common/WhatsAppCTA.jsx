import { MessageCircle } from "lucide-react";
import { companyInfo } from "../../data/transitData";
import styles from "./WhatsAppCTA.module.css";

const message =
  "Bonjour Florent Auto Transit, je vous contacte depuis votre site web pour une demande d'informations.";

export default function WhatsAppCTA() {
  return (
    <a
      className={styles.cta}
      href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Florent Auto Transit sur WhatsApp"
    >
      <MessageCircle aria-hidden="true" strokeWidth={1.8} />
      <span className={styles.label}>WhatsApp</span>
    </a>
  );
}
