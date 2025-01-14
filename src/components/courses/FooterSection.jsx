import { useState } from "react";
import Input from "../common/Input";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const FooterSection = () => {
  const [number, setNumber] = useState("");
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};

  const { primary_color = "#32227E", primary_color_dark = "#9747FF" } =
    appSettings;

  return (
    <footer className="text-white">
      {/* Top Section */}
      <div style={{ backgroundColor: primary_color }} className="px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">عن HoskaDev</h3>
            <ul className="gap-y-2">
              <li>عن المنصة</li>
              <li>سياسة الخصوصية</li>
              <li>قواعد عامة</li>
              <li>تواصل معنا</li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">روابط</h3>
            <ul className="gap-y-2">
              <li>الدورات</li>
              <li>المقالات</li>
            </ul>
          </div>

          {/* Certificate Verification */}
          <div className="text-center flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">تحقق من شهادتك</h3>
            <Input
              placeholder={"أدخل رقم الشهادة"}
              icon={<>تحقق</>}
              value={number}
              setValue={setNumber}
            />
          </div>

          {/* Follow Us */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">تابعنا</h3>
            <div className="flex justify-center items-center gap-x-4">
              <a
                href="#"
                className="p-2 rounded-full text-2xl"
                style={{ backgroundColor: "white", color: primary_color }}
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-2xl"
                style={{ backgroundColor: "white", color: primary_color }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-2xl"
                style={{ backgroundColor: "white", color: primary_color }}
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-2xl"
                style={{ backgroundColor: "white", color: primary_color }}
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-2xl"
                style={{ backgroundColor: "white", color: primary_color }}
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Payment and Trust */}
        <div className="text-center border-t border-gray-500 pt-6 mx-auto">
          <h3 className="text-2xl font-semibold mb-4">وسائل الدفع المدعومة</h3>
          <div className="flex justify-center items-center mb-6">
            <span className="mx-4">
              <img src="/cib.png" alt="carte cib" className="inline" />
            </span>
            <span className="mx-4">
              <img src="/poste.png" alt="poste" className="inline" />
            </span>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: primary_color_dark }}
        className="flex justify-between items-center text-sm py-4 px-6"
      >
        <p> جميع الحقوق محفوظة لدى HoskaDev © 2024.</p>
        <div>
          <img src="trusted.png" alt="Trusted By Hoska" className="inline" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
