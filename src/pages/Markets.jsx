export default function Markets() {
  return (
    <main className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold text-brand-dark"
        >
          Export Markets
        </h1>

        {/* INTRO */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 text-gray-700 leading-relaxed max-w-4xl"
        >
          Glovira Overseas supplies agricultural commodities to international
          markets with a focus on consistency, reliability and long-term trade
          relationships. Our export operations are structured to meet diverse
          market requirements across multiple regions.
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-gray-700 leading-relaxed max-w-4xl"
        >
          We work closely with buyers, logistics partners and sourcing networks
          to ensure smooth execution of export orders across key global markets.
        </p>

        {/* MARKETS GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              name: "Middle East",
              desc: "Supplying spices, pulses and oilseeds to trading hubs and distributors across the Middle East, with a focus on consistent quality and timely delivery."
            },
            {
              name: "Africa",
              desc: "Serving African markets with reliable supply of agricultural commodities, supporting bulk orders and structured shipment schedules."
            },
            {
              name: "Asia",
              desc: "Exporting to Asian markets with emphasis on quality compliance, regional preferences and long-term buyer partnerships."
            }
          ].map((market, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white p-6 rounded-lg border"
            >
              <h3 className="font-semibold text-lg mb-2">
                {market.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {market.desc}
              </p>
            </div>
          ))}
        </div>

        {/* EXPORT CAPABILITIES */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-6"
          >
            Market-Specific Export Capabilities
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 leading-relaxed max-w-4xl"
          >
            Different markets require different handling, packaging and
            documentation standards. Our export process is designed to adapt to
            regional requirements while maintaining consistent product quality.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              "Flexible Packaging Options",
              "Region-Specific Documentation",
              "Bulk & Container Shipments",
              "Port-to-Port Coordination"
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="p-6 bg-white border rounded-lg text-center"
              >
                <h4 className="font-medium">
                  {item}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* LOGISTICS */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-6"
          >
            Logistics & Shipment Handling
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 leading-relaxed max-w-4xl"
          >
            Our logistics planning supports efficient movement of goods from
            origin to destination. We coordinate with freight forwarders and
            shipping lines to ensure timely dispatch and delivery across
            international ports.
          </p>
        </section>

        {/* TRADE APPROACH */}
        <section className="mt-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-6"
          >
            Our Trade Approach
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 leading-relaxed max-w-4xl"
          >
            We believe in transparent trade practices, clear communication and
            long-term cooperation. Our goal is to build stable export
            relationships that support mutual growth across markets.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-24 bg-white p-10 rounded-lg border text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold mb-4"
          >
            Exporting to Your Market
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-700 mb-6"
          >
            If you are looking for a reliable export partner for agricultural
            commodities, Glovira Overseas is ready to support your market needs.
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
