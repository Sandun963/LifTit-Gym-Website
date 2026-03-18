export default function About() {
  return (
    <section id="about" className="bg-light text-black py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <img
          src="https://images.unsplash.com/photo-1558611848-73f7eb4001ab"
          alt="gym"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>
            We provide a premium fitness experience with world-class equipment,
            expert trainers, and personalized programs to help you achieve your
            fitness goals.
          </p>
        </div>
      </div>
    </section>
  );
}