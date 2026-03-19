import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: 20,
    features: ["Gym Access", "Locker", "1 Trainer Session"],
    id: "basic",
  },
  {
    name: "Standard",
    price: 40,
    features: ["All Basic Features", "Group Classes", "Diet Plan"],
    popular: true,
    id: "standard",
  },
  {
    name: "Premium",
    price: 70,
    features: ["All Features", "Personal Trainer", "24/7 Access"],
    id: "premium",
  },
];

export default function Pricing() {
  const navigate = useNavigate();

  const handleCheckout = (plan) => {
    // pass plan data to payment page
    navigate("/checkout", { state: plan });
  };

  return (
    <section id="pricing" className="bg-light py-20">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Membership <span className="text-primary">Plans</span>
        </h2>
        <p className="text-gray mt-3">
          Choose the perfect plan for your fitness journey
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-3xl border transition duration-300 
            backdrop-blur-lg shadow-xl hover:-translate-y-3 ${
              plan.popular
                ? "bg-primary text-black scale-105 border-primary"
                : "bg-white/70 border-gray-200"
            }`}
          >
            
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-black text-light text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Plan Name */}
            <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>

            {/* Price */}
            <p className="text-4xl font-extrabold mb-6">
              ${plan.price}
              <span className="text-sm font-normal"> /month</span>
            </p>

            {/* Features */}
            <ul className="mb-8 space-y-3">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => handleCheckout(plan)}
              className={`w-full py-3 rounded-full font-semibold transition ${
                plan.popular
                  ? "bg-black text-light hover:opacity-80"
                  : "bg-primary text-black hover:scale-105"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}