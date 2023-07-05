import Navbar from "./components/Navbar";
import Home from './components/Home'
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Certifications from "./components/Certifications ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTopButton from "./components/ToTopButton";
import Lottie from "lottie-react";
import "./style/style.css";
function App() {
  return (
    <div>
      <Navbar />
      <Home Lottie={Lottie} />
      <About />
      <Services />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
      <ToTopButton />
    </div>
  );
}

export default App;
