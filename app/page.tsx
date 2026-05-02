
// import Hero from "@/components/Hero";
import Team from "./components/Team";
import Contact from "./components/Contact";
import VentureProducts from "./components/VentureProducts";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Hero /> */}
      <VentureProducts />
      <Team />
      <Contact />
      <footer className="py-10 bg-slate-900 text-white text-center text-sm border-t border-white/5">
        <p>© 2025 Su Indra Groups Pvt. Ltd. | Technology • Security • Growth</p>
      </footer>
    </main>
  );
}