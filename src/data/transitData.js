export const companyInfo = {
  brandName: "Florent Auto Transit",
  manager: "Mr. Florent BOUSSIM",
  role: "Gérant",
  corridor: "OUAGA – LOMÉ",
  corridorFrom: "Ouagadougou",
  corridorTo: "Lomé",
  base: "Chez Zarzar",
  whatsapp: "22676218779",
  tagline:
    "Transit et acheminement de véhicules entre Ouagadougou et Lomé, avec un interlocuteur unique.",
  phones: [
    {
      label: "Burkina Faso · Ligne 1",
      display: "+226 76 21 87 79",
      href: "tel:+22676218779",
    },
    {
      label: "Burkina Faso · Ligne 2",
      display: "+226 52 09 78 00",
      href: "tel:+22652097800",
    },
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
    id: "importation",
    title: "Importation",
    description:
      "Recherche, contrôle et achat du véhicule à l'étranger, avec un dossier d'importation suivi et transparent.",
    points: ["Véhicules vérifiés", "Dédouanement inclus", "Rapport transparent"],
  },
  {
    id: "equipement",
    title: "Équipement & Entretien",
    description:
      "Préparation du véhicule avant livraison : équipements, contrôle mécanique et entretien de mise en route.",
    points: ["Contrôle mécanique", "Équipements sur mesure", "Livraison prête à rouler"],
  },
];

export const demoNotice = "Données de démonstration / Véhicule fictif";

export const vehicles = [
  {
    id: "toyota-land-cruiser-prado",
    name: "Toyota Land Cruiser Prado",
    category: "SUV · 4x4",
    year: "2021",
    fuel: "Diesel",
    transmission: "Automatique",
    condition: "Occasion",
    badge: "Fiable",
    discount: "Réduction 20%",
    price: "Sur devis",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota_Land_Cruiser_Prado_150.jpg?width=1600",
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
    badge: "Fiable",
    price: "Sur devis",
    image: "",
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
    badge: "Fiable",
    price: "Sur devis",
    image: "",
    specs: ["5 portes", "5 places", "2WD"],
  },
];
