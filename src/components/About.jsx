import { useEffect, useState } from "react";

import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import about5 from "../assets/about5.jpg";
import about6 from "../assets/about6.jpg";
import about7 from "../assets/about7.jpg";

export default function About() {
  const images = [about1, about2, about3, about4,about5,about6,about7];
  const [current, setCurrent] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="bg-light text-black py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* 🔥 Slideshow */}
        <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-primary">LifTit</span>
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            At LifTit, we deliver a premium fitness experience designed to
            transform your body and mindset. With modern equipment, expert
            trainers, and customized programs, we help you reach your goals
            faster.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether you're a beginner or a professional athlete, our training
            environment is built to motivate you and push you beyond limits.
          </p>
        </div>
      </div>
    </section>
  );
}