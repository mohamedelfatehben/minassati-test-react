import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useEffect, useState } from "react";
import { getCourseDetailsApi } from "../api/courses";
import CourseHeroSection from "../components/course/Hero";
import CourseOutputs from "../components/course/CourseOutputs";
import CourseInfo from "../components/course/CourseInfo";
import CourseOutline from "../components/course/CourseOutline";
import SignUpNow from "../components/courses/SignUpNow";
import FooterSection from "../components/courses/FooterSection";

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
      <CourseOutputs
        outputs={
          course?.details?.course_outputs
            ? Object.values(course?.details?.course_outputs)
            : []
        }
      />
      <CourseOutline />
      <CourseInfo />
      <SignUpNow />
      <FooterSection />
    </div>
  );
}

export default Course;
