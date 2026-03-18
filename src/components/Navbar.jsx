import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-light fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-primary text-xl font-bold">LifTit</h1>

        <div className="hidden md:flex gap-6">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <a href="#about" className="block mb-2">About</a>
          <a href="#services" className="block mb-2">Services</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}