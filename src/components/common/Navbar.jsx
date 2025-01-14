import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // Fetch app settings from localStorage
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const {
    app_logo = "",
    app_name = "",
    secondary_color = "#FEC60F",
  } = appSettings;

  const location = useLocation();

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الدورات", path: "/courses" },
    { name: "المقالات", path: "/articles" },
  ];

  return (
    <nav className="flex justify-center items-center z-50 px-16 py-4 absolute top-0 left-0 w-screen">
      <div className="w-full content flex items-center justify-between">
        {/* Logo */}
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

        {/* Navigation Links */}
        <div className="flex gap-6">
          {navLinks.map((link, i) => (
            <>
              <Link
                to={link.path}
                className={`text-lg hover:text-[${secondary_color}]`}
                style={{
                  color:
                    location.pathname === link.path ? secondary_color : "white",
                }}
              >
                {link.name}
              </Link>
              {i !== navLinks.length - 1 && (
                <span className="text-white">|</span>
              )}
            </>
          ))}
        </div>

        {/* Login and Register Buttons */}
        <div className="flex gap-4">
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
    </nav>
  );
};

export default Navbar;
