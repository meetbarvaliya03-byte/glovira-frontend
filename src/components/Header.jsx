import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo2.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-teal-600 font-semibold"
      : "hover:text-teal-600 transition";

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Glovira Overseas Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-brand-dark hidden sm:block">
              Glovira <span className="text-teal-600">Overseas</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/company" className={navLinkClass}>Company</NavLink>
            <NavLink to="/products" className={navLinkClass}>Products</NavLink>
            <NavLink to="/quality" className={navLinkClass}>Quality</NavLink>
            <NavLink to="/markets" className={navLinkClass}>Markets</NavLink>

            <Link
              to="/enquiry"
              className="ml-4 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-md font-semibold"
            >
              Enquiry
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-white border-t shadow">
          <nav className="flex flex-col px-6 py-6 gap-4">
            <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/company" className={navLinkClass}>Company</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/products" className={navLinkClass}>Products</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/quality" className={navLinkClass}>Quality</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/markets" className={navLinkClass}>Markets</NavLink>

            <Link
              onClick={() => setOpen(false)}
              to="/enquiry"
              className="mt-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-semibold text-center"
            >
              Enquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
