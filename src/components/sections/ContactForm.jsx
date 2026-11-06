import { useState } from "react";
import { companyInfo } from "../../data/transitData";
import styles from "./ContactForm.module.css";

const serviceOptions = [
  { value: "transit", label: "Transit Ouaga – Lomé" },
  { value: "importation", label: "Importation" },
  { value: "entretien", label: "Entretien" },
];

const serviceLabels = Object.fromEntries(
  serviceOptions.map((option) => [option.value, option.label]),
);

const emptyForm = { name: "", phone: "", service: "transit", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Indiquez votre nom complet.";
    if (!form.phone.trim()) nextErrors.phone = "Indiquez votre numéro de téléphone.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = nextErrors.name ? "name" : "phone";
      event.currentTarget.elements[firstInvalid]?.focus();
      return;
    }

    const text = [
      "Bonjour Florent Auto Transit, je vous contacte depuis votre site web.",
      `Nom : ${form.name.trim()}`,
      `Téléphone : ${form.phone.trim()}`,
      `Service : ${serviceLabels[form.service]}`,
      `Message : ${form.message.trim() || "—"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("Votre demande est prête dans WhatsApp.");
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Contact</p>
          <h2 className={styles.title}>Parlons de votre véhicule.</h2>
          <p className={styles.lead}>
            Décrivez votre besoin : nous revenons vers vous avec une cotation claire et un
            interlocuteur unique.
          </p>

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

          <div className={styles.phones}>
            {companyInfo.phones.map((phone) => (
              <a key={phone.href} href={phone.href} className={styles.phone}>
                <span>{phone.label}</span>
                {phone.display}
              </a>
            ))}
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="contact-name">Nom complet</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <p id="contact-name-error" className={styles.error} role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-phone">Téléphone</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            />
            {errors.phone && (
              <p id="contact-phone-error" className={styles.error} role="alert">
                {errors.phone}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-service">Type de service</label>
            <select
              id="contact-service"
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Véhicule recherché, délais, budget…"
            />
          </div>

          <button type="submit" className={styles.submit}>
            Envoyer la demande
          </button>

          <p className={styles.status} role="status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
