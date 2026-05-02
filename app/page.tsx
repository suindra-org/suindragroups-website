import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VentureProducts from "./components/VentureProducts";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Import the new component

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div id="ventures">
        <VentureProducts />
      </div>
      <Team />
      <Contact />
      <Footer /> {/* High-end Footer here */}
    </main>
  );
}