import { About } from "./components/About";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer"; // Updated
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar"; // Updated
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team"; // Updated
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
