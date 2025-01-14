import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // Fetch app settings from localStorage
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const {
    app_logo = "",
    app_name = "",
    primary_color = "#32227E",
    secondary_color = "#FEC60F",
  } = appSettings;

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الدورات", path: "/courses" },
    { name: "المقالات", path: "/articles" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-center items-center z-50 px-6 py-4 absolute top-0 left-0 w-screen bg-white md:bg-transparent md:text-yellow-500">
      <div className="w-full content flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex justify-between w-full md:w-fit">
          <div className="flex items-center gap-4">
            {app_logo && (
              <Link to="/">
                <img
                  src={app_logo}
                  alt={app_name}
                  className="h-10 w-auto object-contain"
                />
              </Link>
            )}
            <span className="text-white text-lg font-bold">{app_name}</span>
          </div>

          {/* Mobile Menu Icon */}
          <div className="block md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex gap-6 md:gap-6 w-full md:w-fit  ${
            isMenuOpen ? "flex flex-col gap-y-2" : "hidden"
          } md:flex`}
        >
          {navLinks.map((link, i) => (
            <>
              <Link
                to={link.path}
                className={`text-lg text-center md:text-start`}
                style={{
                  color:
                    location.pathname === link.path ? secondary_color : "black",
                }}
              >
                {link.name}
              </Link>
              {i !== navLinks.length - 1 && (
                <span className="text-white hidden md:block">|</span>
              )}
            </>
          ))}
        </div>

        {/* Login and Register Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="text-white">
            تسجيل الدخول
          </Link>
          <Link
            to="/register"
            className="py-2 px-4 rounded-full text-white"
            style={{ backgroundColor: secondary_color }}
          >
            حساب جديد
          </Link>
        </div>
      </div>

      {/* Mobile Login and Register Buttons */}
      {isMenuOpen && (
        <div className="md:hidden flex items-center mt-4 gap-4">
          <Link
            to="/login"
            className="py-2 px-4 rounded-full text-white"
            style={{ backgroundColor: primary_color }}
          >
            تسجيل الدخول
          </Link>
          <Link
            to="/register"
            className="py-2 px-4 rounded-full text-white"
            style={{ backgroundColor: secondary_color }}
          >
            حساب جديد
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
