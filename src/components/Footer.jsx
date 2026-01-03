import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Glovira Overseas
          </h3>
          <p className="text-sm leading-relaxed">
            Indian exporter of spices, pulses and oilseeds, supplying
            global markets with consistent quality and transparent trade.
          </p>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li>Spices</li>
            <li>Pulses</li>
            <li>Oilseeds</li>
          </ul>
        </div>

        {/* MARKETS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Markets</h4>
          <ul className="space-y-2 text-sm">
            <li>Middle East</li>
            <li>Africa</li>
            <li>Asia</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">
            Email: gloviraoverseasbusiness@gmail.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Glovira Overseas. All rights reserved.
      </div>
    </footer>
  );
}
