import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import RadiusComponent from "../common/RadiusComponent";
import { IoMdPersonAdd } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";

// Course Outline Component
const CourseOutline = () => {
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const {
    primary_color = "#32227E",
    secondary_color = "#FF9900",
    primary_color_light = "#E5E0FF",
  } = appSettings;

  const [openSection, setOpenSection] = useState(null);
  const [openLesson, setOpenLesson] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const toggleLesson = (index) => {
    setOpenLesson(openLesson === index ? null : index);
  };

  const sections = [
    {
      title: "مقدمة في علم التصميم الجرافيكي",
      totalDuration: "25 دقيقة",
      lessons: [
        {
          title: "ما هو التصميم الجرافيكي؟",
          totalDuration: "10 دقائق",
          videos: [{ title: "تعريف التصميم الجرافيكي", duration: "10 دقائق" }],
        },
        {
          title: "أهمية التصميم الجرافيكي في حياتنا اليومية",
          totalDuration: "15 دقيقة",
          videos: [
            { title: "مقدمة عن الأهمية", duration: "8 دقائق" },
            { title: "أمثلة عملية", duration: "7 دقائق" },
          ],
        },
      ],
    },
    {
      title: "تاريخ التصميم الجرافيكي",
      totalDuration: "8 دقائق",
      lessons: [
        {
          title: "نبذة عن تاريخ التصميم",
          totalDuration: "8 دقائق",
          videos: [{ title: "تاريخ التصميم", duration: "8 دقائق" }],
        },
      ],
    },
  ];

  return (
    <div className=" bg-gray-100 py-10 px-6">
      <div className="bg-white rounded-3xl pb-6 content">
        <RadiusComponent
          content={<h1 className="text-xl font-bold">مخطط الدورة</h1>}
        />
        <div className="flex flex-col gap-y-4 px-10">
          {sections.map((section, sectionIndex) => {
            // Calculate the total number of videos in the section
            const totalVideos = section.lessons.reduce(
              (sum, lesson) => sum + lesson.videos.length,
              0
            );

            return (
              <div key={sectionIndex} className="mb-4">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  className="w-full flex justify-between items-center px-4 py-3 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center gap-x-2">
                    {openSection === sectionIndex ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                    <span className="font-medium">{section.title}</span>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <span
                      className="px-2 py-1 text-sm text-white rounded-3xl"
                      style={{ backgroundColor: primary_color_light }}
                    >
                      {totalVideos} فيديوهات
                    </span>
                    <span
                      className="px-2 py-1 text-sm text-white rounded-3xl"
                      style={{ backgroundColor: primary_color }}
                    >
                      {section.totalDuration}
                    </span>
                  </div>
                </button>
                {/* Section Lessons */}
                {openSection === sectionIndex && (
                  <div className="mt-2">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="mb-4">
                        <button
                          onClick={() =>
                            toggleLesson(`${sectionIndex}-${lessonIndex}`)
                          }
                          className="w-full flex justify-between items-center px-4 py-2 rounded-lg "
                        >
                          <div className="flex items-center gap-x-2">
                            {openLesson === `${sectionIndex}-${lessonIndex}` ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                            <span className="text-sm font-medium">
                              {lesson.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-x-4">
                            <span
                              className="px-2 py-1 text-xs text-white rounded-3xl"
                              style={{ backgroundColor: primary_color_light }}
                            >
                              {lesson.videos.length} فيديوهات
                            </span>
                            <span
                              className="px-2 py-1 text-xs text-white rounded-3xl"
                              style={{ backgroundColor: primary_color }}
                            >
                              {lesson.totalDuration}
                            </span>
                          </div>
                        </button>
                        {/* Lesson Videos */}
                        {openLesson === `${sectionIndex}-${lessonIndex}` && (
                          <ol className="mt-2 px-4 text-sm text-gray-600">
                            {lesson.videos.map((video, videoIndex) => (
                              <li
                                key={videoIndex}
                                className="flex justify-between items-center mb-2"
                              >
                                <span>- {video.title}</span>
                                <span
                                  className="px-2 py-1 text-xs text-white rounded-3xl"
                                  style={{ backgroundColor: primary_color }}
                                >
                                  {video.duration}
                                </span>
                              </li>
                            ))}
                          </ol>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-x-4 mt-6">
          <button
            style={{ backgroundColor: secondary_color }}
            className="rounded-full text-white px-6 py-3 flex gap-x-2 items-center text-2xl font-bold"
          >
            <IoMdPersonAdd />
            <span>سجل الأن</span>
          </button>
          <button
            style={{ backgroundColor: primary_color }}
            className="rounded-full text-white px-6 py-3 flex gap-x-2 items-center text-2xl font-bold"
          >
            <RiGroupLine />
            <span>تسجيل جماعي</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;
