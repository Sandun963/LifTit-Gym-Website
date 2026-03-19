import { useState } from "react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-[var(--navbar-height)] z-50 bg-black border-b border-white/10">
      
      <div className="max-w-6xl mx-auto h-full flex justify-between items-center px-6">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <h1 className="text-5xl font-bold text-light tracking-wide">
            LifT<span className="text-primary">it</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-light">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#pricing" className="hover:text-primary transition">Plans</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-light text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 pb-6 text-light">
          <a href="#about" className="block py-2">About</a>
          <a href="#services" className="block py-2">Services</a>
          <a href="#pricing" className="block py-2">Plans</a>
          <a href="#contact" className="block py-2">Contact</a>

          <button className="mt-4 w-full bg-primary text-black py-2 rounded-full">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}