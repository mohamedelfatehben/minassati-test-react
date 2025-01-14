/* eslint-disable react/prop-types */
import { useState } from "react";
import CourseCard from "./CourseCard";
import Input from "../common/Input";
import RadiusComponent from "../common/RadiusComponent";
import { FaSearch } from "react-icons/fa";

const CoursesSection = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Images array
  const courseImages = ["/image-1.png", "/image-2.jpg", "/image-3.png"];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="bg-white rounded-3xl pb-6 content">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <RadiusComponent
            content={<h1 className="text-xl font-bold">جميع الدورات</h1>}
          />
          <div className="flex gap-x-2  items-center p-3">
            <Input
              placeholder={"ابحث عن دورة..."}
              icon={<FaSearch />}
              value={searchTerm}
              setValue={setSearchTerm}
            />
            <img
              src="/filter.png"
              alt="Filter button"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10">
          {courses?.length > 0 &&
            courses.map((course, i) => (
              <CourseCard
                key={course.id}
                id={course.id}
                name={course.name}
                course_instructor={course.course_instructor}
                course_number_of_ratings={course.number_of_ratings}
                course_rating={course.rating}
                course_duration={course.course_duration}
                course_lessons={course.course_lessons}
                course_discounted_price={course.course_discounted_price}
                course_original_price={course.course_original_price}
                course_level={course.course_level}
                isNew={course.isNew}
                image={courseImages[i % courseImages.length]}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
