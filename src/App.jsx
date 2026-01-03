import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Products from "./pages/Products";
import Quality from "./pages/Quality";
import Markets from "./pages/Markets";
import Enquiry from "./pages/Enquiry";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/markets" element={<Markets />} />

        {/* ✅ FIXED */}
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/enquiry/:product" element={<Enquiry />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {!isAdmin && <Footer />}
    </>
  );
}
