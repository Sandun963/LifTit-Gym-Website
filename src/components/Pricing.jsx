const plans = [
  {
    name: "Basic",
    price: "$20",
    features: ["Gym Access", "Locker", "1 Trainer Session"],
  },
  {
    name: "Standard",
    price: "$40",
    features: ["All Basic Features", "Group Classes", "Diet Plan"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$70",
    features: ["All Features", "Personal Trainer", "24/7 Access"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-light py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Membership Plans</h2>
        <p className="text-gray mt-2">
          Choose a plan that fits your fitness goals
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-lg transition transform hover:-translate-y-2 ${
              plan.popular
                ? "bg-primary text-black scale-105"
                : "bg-white"
            }`}
          >
            
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}/mo</p>

            <ul className="mb-6 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button className="w-full bg-black text-light py-2 rounded-lg hover:opacity-80">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}