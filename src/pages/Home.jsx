import { Link } from "react-router-dom";
import aboutImg from "../assets/about.png"; // ✅ FIXED PATH

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 text-white">
          <span
            data-aos="fade-down"
            className="bg-teal-600 px-4 py-1 rounded w-fit"
          >
            Welcome To
          </span>

          <h1 data-aos="fade-up" className="text-6xl font-bold mt-4">
            Glovira Overseas
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-2xl mt-5 text-lg"
          >
            Indian exporter of spices, pulses and oilseeds supplying global
            markets with consistent quality and transparent trade practices.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex gap-4 mt-8"
          >
            <Link to="/company" className="bg-teal-600 px-6 py-3 rounded">
              More About
            </Link>
            <Link to="/enquiry" className="border px-6 py-3 rounded">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <img
            data-aos="fade-right"
            src={aboutImg}
            className="rounded-lg shadow-lg"
            alt="About Glovira Overseas"
          />

          {/* CONTENT */}
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4">
              About Glovira Overseas
            </h2>

            <p className="text-gray-600 mb-4">
              We focus on ethical sourcing, export-ready processing and
              long-term buyer relationships across global markets.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Ethical sourcing</li>
              <li>✔ Export-ready quality</li>
              <li>✔ Global partnerships</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
