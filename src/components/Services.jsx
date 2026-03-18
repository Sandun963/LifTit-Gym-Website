const services = [
  "Personal Training",
  "Cardio Training",
  "Weight Lifting",
  "Yoga Classes",
];

export default function Services() {
  return (
    <section id="services" className="bg-dark text-light py-16">
      <h2 className="text-3xl text-center mb-10 font-bold">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-primary">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}