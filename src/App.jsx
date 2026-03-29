import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Cohorts from "./pages/Cohorts";
import Connect from "./pages/Connect";

export default function App() {
  return (
    <BrowserRouter>
       <div className="w-full bg-[#3D2F6B] text-white text-center py-3 px-4 text-[12.5px] tracking-wide font-medium m-20">
        <span className="opacity-60 mr-2">New </span>
        Ìmòforge Gratia Vault — 2026 Edition ·{' '}
        
         <a href="https://imoforgeacademy.com/#workshop-details"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          Learn more
        </a>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cohorts" element={<Cohorts />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
