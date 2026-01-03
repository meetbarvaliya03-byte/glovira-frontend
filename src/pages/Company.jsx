export default function Company() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold text-brand-dark"
        >
          Company Profile
        </h1>

        {/* INTRO */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 text-gray-700 leading-relaxed"
        >
          Glovira Overseas is an Indian export company supplying agricultural
          commodities to international markets through reliable sourcing,
          quality-focused processing, and structured export operations.
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-gray-700 leading-relaxed"
        >
          We work closely with trusted suppliers, processors, and logistics
          partners to ensure that every shipment meets buyer specifications,
          export regulations, and delivery timelines.
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-4 text-gray-700 leading-relaxed"
        >
          As a growing exporter, our focus is on building long-term
          relationships with global buyers by maintaining transparency,
          consistency, and accountability across the supply chain.
        </p>

        {/* MISSION / VISION / VALUES */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div
            data-aos="fade-up"
            className="p-6 border rounded-lg"
          >
            <h3 className="font-semibold mb-3 text-lg">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To deliver reliable export solutions by sourcing quality
              agricultural products and executing shipments with accuracy,
              compliance, and professionalism.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="p-6 border rounded-lg"
          >
            <h3 className="font-semibold mb-3 text-lg">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To become a trusted global exporter by consistently meeting
              international quality standards and strengthening our presence
              across key import markets.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="p-6 border rounded-lg"
          >
            <h3 className="font-semibold mb-3 text-lg">Our Values</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Integrity in trade, transparency in communication, consistency in
              quality, and commitment to long-term partnerships.
            </p>
          </div>
        </div>

        {/* WHAT WE DO */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-6"
          >
            What We Do
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 leading-relaxed"
          >
            Glovira Overseas specializes in the export of spices, pulses, and
            oilseeds sourced from key agricultural regions of India. Our
            operations are designed to ensure that products are suitable for
            international consumption and comply with destination market
            requirements.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-gray-700 leading-relaxed"
          >
            We handle coordination across sourcing, quality checks, packing,
            documentation, and logistics to provide buyers with a smooth and
            dependable export experience.
          </p>
        </section>

        {/* QUALITY & COMPLIANCE */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-6"
          >
            Quality & Compliance Approach
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 leading-relaxed"
          >
            Quality control is an integral part of our export process. We ensure
            that products undergo basic inspections before packing and dispatch
            to meet export market expectations.
          </p>

          <ul
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 space-y-2 text-gray-700"
          >
            <li>✔ Supplier verification and sourcing checks</li>
            <li>✔ Pre-shipment inspection and grading</li>
            <li>✔ Standard export packaging practices</li>
            <li>✔ Accurate documentation and compliance support</li>
          </ul>
        </section>

        {/* GLOBAL PRESENCE */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-6"
          >
            Global Trade Focus
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 leading-relaxed"
          >
            Our export operations serve buyers across multiple regions including
            the Middle East, Africa, and Asia. We understand regional market
            preferences and work accordingly to meet buyer specifications.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-gray-700 leading-relaxed"
          >
            With reliable logistics coordination and responsive communication,
            we aim to support importers with timely deliveries and consistent
            product quality.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-24 bg-gray-50 p-10 rounded-lg text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-4"
          >
            Partner With Glovira Overseas
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-700 mb-6"
          >
            If you are looking for a dependable Indian export partner for
            agricultural commodities, we would be pleased to discuss your
            requirements.
          </p>

          <a
            data-aos="fade-up"
            data-aos-delay="300"
            href="/enquiry"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded font-medium"
          >
            Send Enquiry
          </a>
        </section>

      </div>
    </main>
  );
}
