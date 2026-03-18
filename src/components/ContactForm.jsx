import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setSuccess(true);
  };

  return (
    <section id="contact" className="bg-light py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl text-center mb-6 font-bold">
          Contact Us
        </h2>

        {success ? (
          <p className="text-center text-primary">
            Message sent successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <textarea
              placeholder="Message"
              className="w-full p-3 mb-4 border"
              rows="4"
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button className="bg-primary px-6 py-3 rounded">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}