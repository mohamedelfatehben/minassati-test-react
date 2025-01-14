/* eslint-disable react/prop-types */

import { IoMdStar, IoMdTime } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

import RadiusComponent from "../common/RadiusComponent";
import { PiVideoLight } from "react-icons/pi";
import LevelComponent from "../common/LevelComponent";

const CourseCard = ({
  name,
  course_instructor,
  course_number_of_ratings,
  course_rating,
  course_duration,
  course_lessons,
  course_discounted_price,
  course_original_price,
  course_level,
  id,
  image,
}) => {
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const { primary_color = "#32227E" } = appSettings;
  // Render star ratings
  const renderStars = () => {
    const fullStars = Math.floor(course_rating);
    const hasHalfStar = course_rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill(null)
          .map((_, idx) => (
            <IoMdStar key={`full-${idx}`} className="text-yellow-500" />
          ))}
        {hasHalfStar && <IoMdStarHalf className="text-yellow-500" />}
        {Array(emptyStars)
          .fill(null)
          .map((_, idx) => (
            <IoMdStarOutline key={`empty-${idx}`} className="text-gray-300" />
          ))}
      </div>
    );
  };

  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200 text-center sm:text-start">
      {/* Course Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      {/* Course Content */}
      <div className="p-4">
        {/* Course Title */}
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{`الأستاذ ${course_instructor}`}</p>

        {/* Ratings */}
        <div className="flex flex-col sm:flex-row items-center text-sm mt-2">
          <div className="flex gap-x-1">
            <span className="font-semibold text-yellow-500">
              {course_rating}
            </span>
            <span className="ml-2">{renderStars()}</span>
          </div>
          <span className="text-gray-400 ml-2">
            | ({course_number_of_ratings} تقييم)
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-y-2 justify-center sm:justify-between items-center mt-2">
          {/* Info  */}
          <div className="flex items-center gap-x-2 text-black font-medium text-sm mt-3">
            <div className="flex items-center gap-1">
              <span>
                <IoMdTime />
              </span>
              <span>{course_duration}</span>
            </div>
            <div className="flex items-center gap-1 ml-4">
              <span>
                <PiVideoLight />
              </span>
              <span>{course_lessons} درس</span>
            </div>
          </div>
          <LevelComponent course_level={course_level} />
        </div>

        {/* Price  */}
        <div className="flex items-center gap-x-4 mt-4">
          <p className="text-xl font-bold text-purple-700">
            {course_discounted_price} دج
          </p>
          {course_original_price && (
            <p className="text-sm text-gray-400 line-through">
              {course_original_price} دج
            </p>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between">
        <span className="bg-red-500 rounded-full text-white text-sm px-2 py-1 flex gap-x-2 items-center font-bold mr-4">
          <img src="/new.png" alt="New icon" className="h-fit w-auto" />
          <span>جديد</span>
        </span>
        <RadiusComponent
          content={<a href={`/courses/${id}`}>التفاصيل . . .</a>}
          background={primary_color}
        />
      </div>
    </div>
  );
};

export default CourseCard;
