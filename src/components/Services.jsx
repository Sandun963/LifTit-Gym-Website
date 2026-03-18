const services = [
  "Personal Training",
  "Cardio Training",
  "Weight Lifting",
  "Yoga Classes",
];

export default function Services() {
  return (
    <section id="services" className="bg-dark text-light py-20">
      <h2 className="text-4xl text-center mb-12 font-bold">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:scale-105 transition"
          >
            <h3 className="text-primary text-lg font-semibold">
              {service}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}