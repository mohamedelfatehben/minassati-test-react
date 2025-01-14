/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

function CourseOutputs({ outputs }) {
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const { primary_color = "#32227E", secondary_color = "#FF9900" } =
    appSettings;
  return (
    <div className="flex justify-center bg-white p-16 w-screen">
      <div className="content text-center md:text-start grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Outputs Section */}
        <div className="">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">
            ماذا ستتعلم في نهاية هذه الدورة؟
          </h2>
          <ul className="flex flex-col gap-y-6 text-white">
            {outputs.map((output, index) => (
              <li
                key={index}
                style={{ backgroundColor: primary_color }}
                className="flex flex-col md:flex-row text-center md:text-start items-start gap-4 p-4 rounded-3xl"
              >
                {/* Icon */}
                <div
                  style={{ color: secondary_color }}
                  className="flex-shrink-0 mx-auto md:mr-0 text-2xl md:text-5xl "
                >
                  <FaStar />
                </div>

                {/* Content */}
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2">{output.title}</h3>
                  <p className="text-sm">{output.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className=" flex justify-center">
          <img
            src="/output.png"
            alt="Course Completion"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default CourseOutputs;
