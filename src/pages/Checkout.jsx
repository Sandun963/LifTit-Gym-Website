import { useLocation } from "react-router-dom";

export default function Checkout() {
  const { state: plan } = useLocation();

  if (!plan) {
    return <div className="p-10 text-center">No plan selected</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-light">
      <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-lg text-center">
        
        <h2 className="text-3xl font-bold mb-4">
          {plan.name} Plan
        </h2>

        <p className="text-2xl mb-6">${plan.price} / month</p>

        <button
          onClick={() => alert("Integrate Stripe here")}
          className="bg-primary text-black px-6 py-3 rounded-full font-semibold"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}