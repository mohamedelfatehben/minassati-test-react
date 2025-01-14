import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useEffect, useState } from "react";
import { getCourseDetailsApi } from "../api/courses";
import CourseHeroSection from "../components/course/Hero";

function Course() {
  const [course, setCourse] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getCourseDetailsApi(id).then((res) => {
        if (res.status === 200) {
          setCourse(res.data.course);
        }
      });
    }
  }, [id]);
  return (
    <div>
      <Navbar />
      <CourseHeroSection course={course} />
    </div>
  );
}

export default Course;
