import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Email validation regex
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-dark text-light py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-6">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {success ? (
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
            <p className="text-primary text-lg font-semibold">
              ✅ Message sent successfully!
            </p>
          </div>
        ) : (
          <form
            className="space-y-5 bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="text-left">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full p-3 rounded bg-black border border-gray focus:border-primary outline-none"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="text-left">
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full p-3 rounded bg-black border border-gray focus:border-primary outline-none"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="text-left">
              <textarea
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full p-3 rounded bg-black border border-gray focus:border-primary outline-none"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-black py-3 rounded-full font-semibold transition hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}