import { Link } from "react-router-dom";
import {
  GiOilDrum,
  GiCow,
  GiChiliPepper,
} from "react-icons/gi";

export default function Products() {
  const products = [
    {
      name: "Groundnut Oil",
      desc: "Premium cold pressed and refined groundnut oil suitable for domestic and export markets.",
      icon: GiOilDrum,
    },
    {
      name: "Ghee",
      desc: "Pure cow ghee with rich aroma, high nutrition value and long shelf life.",
      icon: GiCow,
    },
    {
      name: "Spices",
      desc: "Red chilli, turmeric and a wide range of whole and powdered spices.",
      icon: GiChiliPepper,
    },
  ];

  return (
    <main className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1
          className="text-4xl font-bold mb-12"
          data-aos="fade-up"
        >
          Our Products
        </h1>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="bg-white p-8 rounded-lg shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="text-5xl text-teal-600 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  {p.name}
                </h3>

                <p className="text-gray-600 mb-6">
                  {p.desc}
                </p>

                <Link
                  to={`/enquiry/${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-teal-600 font-medium hover:underline"
                >
                  Request Details →
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
