import { FaDumbbell, FaRunning, FaHeartbeat, FaSpa } from "react-icons/fa";

const services = [
  {
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your fitness goals.",
    icon: <FaDumbbell />,
  },
  {
    title: "Cardio Training",
    desc: "Improve endurance with high-energy cardio sessions.",
    icon: <FaRunning />,
  },
  {
    title: "Weight Lifting",
    desc: "Build strength with guided weight programs.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Yoga Classes",
    desc: "Enhance flexibility and relax your mind.",
    icon: <FaSpa />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-dark text-light py-20">
      
      <h2 className="text-4xl text-center mb-12 font-bold">
        Our <span className="text-primary">Services</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 
                       hover:scale-105 hover:bg-white/20 transition duration-300 text-center"
          >
            {/* Icon */}
            <div className="text-primary text-4xl mb-4 flex justify-center">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-300">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}