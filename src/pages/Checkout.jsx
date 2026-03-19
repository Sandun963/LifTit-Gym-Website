import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const { state: plan } = useLocation();

  const [form, setForm] = useState({
    name: "",
    card: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  if (!plan) {
    return <div className="p-10 text-center">No plan selected</div>;
  }

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name required";
    if (!form.card || form.card.length < 16)
      err.card = "Invalid card number";
    if (!form.expiry) err.expiry = "Expiry required";
    if (!form.cvv || form.cvv.length < 3)
      err.cvv = "Invalid CVV";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setTimeout(() => {
      setSuccess(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-light px-6">
      
      <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-lg w-full max-w-md">
        
        {!success ? (
          <>
            {/* Plan Info */}
            <h2 className="text-3xl font-bold mb-2 text-center">
              {plan.name} Plan
            </h2>
            <p className="text-center mb-6 text-lg">
              ${plan.price} / month
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full p-3 rounded bg-black border border-gray"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Card Number */}
              <div>
                <input
                  type="text"
                  placeholder="Card Number"
                  maxLength="16"
                  value={form.card}
                  onChange={(e) =>
                    setForm({ ...form, card: e.target.value })
                  }
                  className="w-full p-3 rounded bg-black border border-gray"
                />
                {errors.card && (
                  <p className="text-red-400 text-sm">{errors.card}</p>
                )}
              </div>

              {/* Expiry + CVV */}
              <div className="flex gap-4">
                
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={form.expiry}
                    onChange={(e) =>
                      setForm({ ...form, expiry: e.target.value })
                    }
                    className="w-full p-3 rounded bg-black border border-gray"
                  />
                  {errors.expiry && (
                    <p className="text-red-400 text-sm">
                      {errors.expiry}
                    </p>
                  )}
                </div>

                <div className="w-1/2">
                  <input
                    type="password"
                    placeholder="CVV"
                    maxLength="4"
                    value={form.cvv}
                    onChange={(e) =>
                      setForm({ ...form, cvv: e.target.value })
                    }
                    className="w-full p-3 rounded bg-black border border-gray"
                  />
                  {errors.cvv && (
                    <p className="text-red-400 text-sm">
                      {errors.cvv}
                    </p>
                  )}
                </div>
              </div>

              {/* Pay Button */}
              <button className="w-full bg-primary text-black py-3 rounded-full font-semibold hover:scale-105 transition">
                Pay ${plan.price}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-3">
              Payment Successful 🎉
            </h2>
            <p>You are now subscribed to the {plan.name} plan.</p>
          </div>
        )}
      </div>
    </div>
  );
}