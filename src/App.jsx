import Navbar from "./components/layout/Navbar.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import Services from "./components/sections/Services.jsx";
import VehicleCatalog from "./components/sections/VehicleCatalog.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <VehicleCatalog />
      </main>
    </>
  );
}
