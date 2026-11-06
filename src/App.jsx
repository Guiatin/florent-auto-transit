import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import WhatsAppCTA from "./components/common/WhatsAppCTA.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import Services from "./components/sections/Services.jsx";
import VehicleCatalog from "./components/sections/VehicleCatalog.jsx";
import ContactForm from "./components/sections/ContactForm.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <VehicleCatalog />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
