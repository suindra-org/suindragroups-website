import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VentureProducts from "./components/VentureProducts";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Import the new component
import Services from "./components/Services";
import About from "./components/About";
export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <div id="ventures">
        <VentureProducts />
      </div>
      <About />
      <Team />
      <Contact />
      <Footer /> {/* High-end Footer here */}
    </main>
  );
}