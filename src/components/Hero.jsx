import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";

export default function Hero() {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-light overflow-hidden">
      
      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Build Your Dream Body
        </h1>

        <p className="mb-8 text-lg md:text-xl text-gray-300">
          Train with the best equipment and expert coaches
        </p>

        <button className="bg-primary text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Join Now
        </button>
      </div>
    </section>
  );
}