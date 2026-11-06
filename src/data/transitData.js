export const companyInfo = {
  brandName: "Florent Auto Transit",
  manager: "Mr. Florent BOUSSIM",
  role: "Gérant",
  corridor: "OUAGA – LOMÉ",
  corridorFrom: "Ouagadougou",
  corridorTo: "Lomé",
  base: "Chez Zarzar",
  tagline:
    "Transit et acheminement de véhicules entre Ouagadougou et Lomé, avec un interlocuteur unique.",
  phones: [
    { label: "Burkina Faso", display: "+226 XX XX XX XX", href: "tel:+226XXXXXXXX" },
    { label: "Togo", display: "+228 XX XX XX XX", href: "tel:+228XXXXXXXX" },
  ],
};

export const services = [
  {
    id: "transit",
    title: "Transit Ouaga – Lomé",
    description:
      "Prise en charge complète de votre véhicule sur le corridor Ouagadougou – Lomé, de l'enlèvement à la livraison.",
    points: ["Itinéraire maîtrisé", "Un seul interlocuteur", "Suivi de bout en bout"],
  },
  {
    id: "douane",
    title: "Dédouanement",
    description:
      "Constitution et suivi des dossiers douaniers pour un passage fluide aux frontières du corridor.",
    points: ["Dossiers conformes", "Délais suivis", "Assistance aux frontières"],
  },
  {
    id: "achat",
    title: "Achat & vérification",
    description:
      "Recherche, contrôle et sélection du véhicule avant expédition, selon votre budget et vos besoins.",
    points: ["Véhicules vérifiés", "Rapport transparent", "Conseil personnalisé"],
  },
  {
    id: "livraison",
    title: "Livraison sécurisée",
    description:
      "Acheminement suivi jusqu'au point de remise convenu, avec confirmation à chaque étape.",
    points: ["Points de remise flexibles", "Suivi régulier", "Réception documentée"],
  },
];

export const vehicles = [
  {
    id: "toyota-land-cruiser-prado",
    name: "Toyota Land Cruiser Prado",
    category: "SUV · 4x4",
    year: "2021",
    fuel: "Diesel",
    transmission: "Automatique",
    condition: "Occasion",
    badge: "Exemple de Fiche",
    price: "Sur devis",
    specs: ["5 portes", "7 places", "4x4"],
  },
  {
    id: "toyota-hilux",
    name: "Toyota Hilux",
    category: "Pick-up · 4x4",
    year: "2020",
    fuel: "Diesel",
    transmission: "Manuelle",
    condition: "Occasion",
    badge: "Exemple de Fiche",
    price: "Sur devis",
    specs: ["Double cabine", "5 places", "4x4"],
  },
  {
    id: "toyota-rav4",
    name: "Toyota RAV4",
    category: "SUV",
    year: "2022",
    fuel: "Essence",
    transmission: "Automatique",
    condition: "Occasion",
    badge: "Exemple de Fiche",
    price: "Sur devis",
    specs: ["5 portes", "5 places", "2WD"],
  },
];
