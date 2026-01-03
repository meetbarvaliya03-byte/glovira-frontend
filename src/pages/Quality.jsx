export default function Quality() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold text-brand-dark"
        >
          Quality & Compliance
        </h1>

        {/* INTRODUCTION */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 text-gray-700 leading-relaxed max-w-4xl"
        >
          Quality is a core focus at Glovira Overseas. We follow structured checks
          across sourcing, packing and dispatch to ensure that products supplied
          to our buyers meet export market expectations.
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-gray-700 leading-relaxed max-w-4xl"
        >
          Our quality approach is designed to minimize operational risk, maintain
          product consistency and support long-term relationships with
          international buyers.
        </p>

        {/* QUALITY PRINCIPLES */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            {
              title: "Supplier Verification",
              desc: "Suppliers are evaluated based on reliability, consistency and ability to meet export requirements."
            },
            {
              title: "Pre-shipment Inspection",
              desc: "Basic inspections are conducted prior to dispatch to verify quality, grading and packaging."
            },
            {
              title: "Export Packaging Standards",
              desc: "Products are packed using suitable materials to ensure safety during storage and transit."
            },
            {
              title: "Documentation Accuracy",
              desc: "Export documents are prepared carefully to support customs clearance and buyer compliance."
            }
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="border rounded-lg p-6 bg-white"
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* QUALITY PROCESS */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-8"
          >
            Our Quality Control Process
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 leading-relaxed max-w-4xl mb-10"
          >
            Our quality control process begins at the sourcing stage and
            continues through cleaning, grading, packing and dispatch. Each
            stage is handled with attention to consistency and product safety.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Sourcing Review",
              "Cleaning & Grading",
              "Packing & Handling",
              "Final Dispatch Check"
            ].map((step, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="p-6 bg-gray-50 rounded-lg border text-center"
              >
                <div className="text-sm text-teal-600 font-semibold mb-2">
                  Step {i + 1}
                </div>
                <h4 className="font-medium">
                  {step}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* PACKING & HANDLING */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-6"
          >
            Packing & Handling Practices
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 leading-relaxed max-w-4xl"
          >
            Proper packing plays a critical role in preserving product quality
            during transportation. We follow standard export packing practices
            based on product type, destination market and shipping conditions.
          </p>
        </section>

        {/* COMPLIANCE */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-6"
          >
            Export Compliance & Documentation
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 leading-relaxed max-w-4xl"
          >
            Accurate documentation is essential for smooth export operations.
            We ensure that all shipment documents are prepared correctly to
            support customs procedures and buyer requirements.
          </p>
        </section>

        {/* CONTINUOUS IMPROVEMENT */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-6"
          >
            Continuous Improvement
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 leading-relaxed max-w-4xl"
          >
            We continuously review our quality processes based on buyer feedback,
            shipment performance and operational experience to improve
            consistency and reliability over time.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-24 bg-gray-50 p-10 rounded-lg text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-4"
          >
            Quality You Can Depend On
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-700 mb-6"
          >
            If quality and compliance are critical to your import requirements,
            Glovira Overseas is ready to support your sourcing needs.
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
