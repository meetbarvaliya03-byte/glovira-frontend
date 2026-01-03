import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Enquiry() {
  const { product } = useParams();

  // Convert slug → readable text
  const formatProduct = (v) =>
    v
      ? v
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")
      : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  /* ======================
     SYNC PRODUCT FROM URL
  ====================== */
  useEffect(() => {
    if (product) {
      setFormData((prev) => ({
        ...prev,
        product: formatProduct(product),
      }));
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ======================
     SUBMIT
  ====================== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://glovira-backend.onrender.com/api/enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send enquiry");
      }

      toast.success("Enquiry sent successfully");

      setFormData({
        name: "",
        email: "",
        product: product ? formatProduct(product) : "",
        message: "",
      });
    } catch (err) {
      toast.error(err.message || "Failed to send enquiry");
      console.error("Enquiry error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-2" data-aos="fade-up">
          Send Enquiry
        </h1>

        <p
          className="text-gray-600 mb-10"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          Share your product requirements and our team will contact you shortly.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-lg shadow space-y-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select Product</option>
            <option>Groundnut Oil</option>
            <option>Ghee</option>
            <option>Spices</option>
          </select>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border px-4 py-2 rounded"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full border px-4 py-2 rounded"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Quantity, packing, specifications..."
            required
            rows="4"
            className="w-full border px-4 py-2 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded transition"
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </main>
  );
}
