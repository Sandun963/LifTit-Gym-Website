import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSuccess(true);
  };

  return (
    <section id="contact" className="bg-dark text-light py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

        {success ? (
          <p className="text-primary">Message sent successfully!</p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              className="w-full p-3 rounded bg-black border border-gray"
              placeholder="Name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            <input
              className="w-full p-3 rounded bg-black border border-gray"
              placeholder="Email"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            <textarea
              className="w-full p-3 rounded bg-black border border-gray"
              placeholder="Message"
              rows="4"
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />
            <button className="bg-primary text-black px-6 py-3 rounded-full">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}