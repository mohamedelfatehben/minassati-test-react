/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Navbar from "../common/Navbar";

const HeroSection = ({ courses }) => {
  // Fetch app settings from localStorage
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const { secondary_color = "#FF9900" } = appSettings;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
        setIsAnimating(false);
      }, 500); // Match the animation duration
    }, 5000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [courses.length]);

  // Handle dot click
  const handleDotClick = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000`}
        style={{
          backgroundImage: `url(/image.png)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Navbar */}
      <Navbar />

      {/* Course Content */}
      {courses.length > 0 && (
        <div className="content flex justify-center items-center text-center sm:text-start">
          <div className="relative z-10 text-white px-16 max-w-3xl">
            <span className="bg-red-500 rounded-full text-white text-sm px-4 py-1 flex gap-x-2 items-center w-fit mx-auto sm:mr-0">
              <img
                src="/trending.png"
                alt="Trending icon"
                className="h-fit w-auto"
              />
              <span>رائج</span>
            </span>{" "}
            <h2
              className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 ${
                isAnimating
                  ? "opacity-0 translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {courses[currentIndex].name}
            </h2>
            <p
              className={`text-lg lg:text-xl mb-8 transition-all duration-500 ${
                isAnimating
                  ? "opacity-0 translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {courses[currentIndex].description ||
                "دورة شاملة لتعلم المهارات العملية المطلوبة."}
            </p>
            <a
              href={`/courses/${courses[currentIndex].id}`}
              style={{ backgroundColor: secondary_color }}
              className="text-white px-6 py-3 rounded-full text-lg w-fit transition-transform duration-300 hover:scale-105"
            >
              تفاصيل الدورة &gt;
            </a>
          </div>
        </div>
      )}

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {courses.map((_, index) => (
          <span
            key={index}
            style={{
              backgroundColor:
                currentIndex === index ? secondary_color : "#555",
            }}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "scale-125" : "scale-100"
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
