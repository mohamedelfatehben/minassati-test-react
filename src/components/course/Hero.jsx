/* eslint-disable react/prop-types */
import LevelComponent from "../common/LevelComponent";
import Navbar from "../common/Navbar";
import CourseGroups from "./CourseGroups";

const CourseHeroSection = ({ course }) => {
  // Fetch app settings from localStorage
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const { secondary_color = "#FF9900" } = appSettings;

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url(/image.png)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Navbar */}
      <Navbar />

      {/* Course Content */}
      {course && (
        <div className="content flex flex-col gap-y-10 md:flex-row items-center justify-center md:justify-between px-8 lg:px-16 w-full my-24  md:mt-16">
          <div className="relative z-10 text-white max-w-3xl text-center md:text-start">
            {/* Trending Badge */}
            <div className="flex gap-x-2 items-center mb-4">
              <div className="bg-red-500 rounded-full text-white text-sm px-4 py-1 flex gap-x-2 items-center w-fit">
                <img
                  src="/trending.png"
                  alt="Trending icon"
                  className="h-4 w-auto"
                />
                <span>رائج</span>
              </div>
              <LevelComponent
                course_level={course.details.specifications.course_level}
              />
            </div>

            {/* Course Name */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {course.basic_info.name}
            </h2>

            {/* Course Description */}
            <p className="text-lg lg:text-xl mb-8">
              {course.basic_info.description}
            </p>

            {/* Course Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex justify-center md:justify-start items-center gap-2">
                <img src="/type.png" alt="Type" className="h-6 w-6" />
                <span>
                  نمط الدورة : {course.details.specifications.course_type}
                </span>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-2">
                <img src="/language.png" alt="Type" className="h-6 w-6" />
                <span>
                  اللغة : {course.details.specifications.course_language}
                </span>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-2">
                <img src="/duration.png" alt="Duration" className="h-6 w-6" />
                <span>{course.details.specifications.course_duration}</span>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-2">
                <img src="/begin.png" alt="Lessons" className="h-6 w-6" />
                <span>
                  بداية الدورة : {course.details.specifications.course_begin}
                </span>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-2">
                <img
                  src="/certificate.png"
                  alt="Certificate"
                  className="h-6 w-6"
                />
                <span>{course.details.specifications.course_certificate}</span>
              </div>
            </div>

            {/* Course Price */}
            <div className="mb-6 flex gap-x-4 items-center justify-center md:justify-start text-3xl font-bold">
              <span style={{ color: secondary_color }}>
                {course.basic_info.course_discounted_price} دج
              </span>
              <span className="line-through text-gray-400 ">
                {course.basic_info.course_original_price} دج
              </span>
            </div>

            {/* Enroll Button */}
            <a
              href={`/courses/${course.basic_info.id}`}
              style={{ backgroundColor: secondary_color }}
              className="text-white px-6 py-3 rounded-full text-lg transition-transform duration-300 hover:scale-105"
            >
              سجل الآن &gt;
            </a>
          </div>
          <CourseGroups />
        </div>
      )}
    </div>
  );
};

export default CourseHeroSection;
