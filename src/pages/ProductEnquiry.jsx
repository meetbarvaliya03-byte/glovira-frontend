import { useParams } from "react-router-dom";

export default function ProductEnquiry() {
  const { product } = useParams();

  const productName =
    product.charAt(0).toUpperCase() + product.slice(1);

  return (
    <main className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold text-brand-dark"
 فهم      >
          {productName} Enquiry
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 text-gray-700 max-w-3xl"
        >
          Please provide your requirements for <strong>{productName}</strong>.
          Our team will respond with availability, specifications and export
          details.
        </p>

        {/* FORM */}
        <form
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 bg-gray-50 p-8 rounded-lg border grid gap-5"
        >

          {/* PRODUCT (AUTO FILLED) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product
            </label>
            <input
              type="text"
              value={productName}
              readOnly
              className="w-full p-3 border rounded bg-gray-100"
            />
          </div>

          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            placeholder="Required Quantity"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            placeholder="Destination Country / Port"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500"
          />

          <textarea
            rows="4"
            placeholder="Specifications / Packaging / Message"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500"
          />

          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white py-3 rounded font-medium"
          >
            Submit {productName} Enquiry
          </button>

        </form>

      </div>
    </main>
  );
}
