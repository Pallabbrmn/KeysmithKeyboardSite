import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Preorder from "./components/Preorder";
import TechSpec from "./components/TechSpec";

function App() {
  return (
    <>
      <div className="bg-black text-white sm:px-10">
        <Navbar />
        <Hero />
        <Features />
        <TechSpec />
        <Preorder />
        <Footer />
      </div>
    </>
  );
}

export default App;
