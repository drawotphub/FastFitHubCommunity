import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experts from "./pages/Experts";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import VoiceAgent from "./components/VoiceAgent";

function App() {
  return (
    <div className="min-h-screen bg-fithub-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <VoiceAgent />
    </div>
  );
}
export default App;
