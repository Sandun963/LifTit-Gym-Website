import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";

export default function Hero() {
  const images = [hero1, hero2, hero3 ,hero4, hero5,hero6];
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-light overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Build Your Dream Body
        </h1>

        <p className="mb-8 text-lg md:text-xl">
          Train with the best equipment and expert coaches
        </p>

        <button className="bg-primary text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Join Now
        </button>
      </div>
    </section>
  );
}