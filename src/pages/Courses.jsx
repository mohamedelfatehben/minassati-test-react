import { useEffect, useState } from "react";
import HeroSection from "../components/courses/Hero";
import { getCoursesApi } from "../api/courses";
import CoursesSection from "../components/courses/CoursesSection";
import SignUpNow from "../components/courses/SignUpNow";
import FooterSection from "../components/courses/FooterSection";

function Courses() {
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const { secondary_color = "#FF9900" } = appSettings;

  const [courses, setCourses] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    getCoursesApi().then((res) => {
      if (res.status === 200) {
        setIsFetching(false);
        setCourses(res.data.courses);
      }
    });
  }, []);
  isFetching ?? (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
      <span className="sr-only">Loading...</span>
      <div
        style={{ backgroundColor: secondary_color }}
        className="h-8 w-8 rounded-full animate-bounce [animation-delay:-0.3s]"
      ></div>
      <div
        style={{ backgroundColor: secondary_color }}
        className="h-8 w-8 rounded-full animate-bounce [animation-delay:-0.15s]"
      ></div>
      <div
        style={{ backgroundColor: secondary_color }}
        className="h-8 w-8 rounded-full animate-bounce"
      ></div>
    </div>
  );
  return (
    <div>
      <HeroSection courses={courses} />
      <CoursesSection courses={courses} />
      <SignUpNow />
      <FooterSection />
    </div>
  );
}

export default Courses;
