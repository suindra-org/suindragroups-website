// import Navbar from "@/components/Navbar"; // Assume you created this based on Step 2 guide
// import Hero from "@/components/Hero";
import Team from "./components/Team";
import Contact from "./components/Contact";
import VentureProducts from "./components/VentureProducts";

export default function Home() {
  return (
    <main>
      {/* <Navbar />
      <Hero /> */}
      <VentureProducts />
      <Team />
      <Contact />
      <footer className="py-10 bg-slate-900 text-white text-center text-sm border-t border-white/5">
        <p>© 2025 Su Indra Groups Pvt. Ltd. | Technology • Security • Growth</p>
      </footer>
    </main>
  );
}