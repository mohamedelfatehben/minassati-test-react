import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import RadiusComponent from "../common/RadiusComponent";

// Course Info Component
const CourseInfo = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const infoSections = [
    {
      title: "مخطط الدورة",
      content: [
        "في هذه الدورة، ستتعلم أساسيات التصميم الجرافيكي ومجالات استخدامه.",
        "ستتعرف على أدوات التصميم وكيفية استخدامها في المشاريع اليومية.",
      ],
    },
    {
      title: "أهداف الدورة",
      content: [
        "فهم أساسيات التصميم الجرافيكي.",
        "التعرف على تاريخ وأهمية التصميم الجرافيكي.",
        "تعلم أدوات التصميم واستخدامها في التطبيقات العملية.",
      ],
    },
    {
      title: "الهدف من هذه الدورة",
      content: [
        "تمكين الطلاب من فهم مفهوم التصميم الجرافيكي.",
        "إعداد الطلاب للاستخدام الفعال للأدوات الجرافيكية.",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="bg-white rounded-3xl pb-6 content">
        <RadiusComponent
          content={<h1 className="text-xl font-bold">معلومات عن الدورة</h1>}
        />
        <div className="flex flex-col gap-y-4 px-6">
          {infoSections.map((section, index) => (
            <div key={index} className="rounded-lg shadow-md">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center p-4"
              >
                <div className="flex items-center gap-x-2">
                  <IoInformationCircleOutline className="text-xl" />
                  <span className="font-semibold text-gray-800 text-xl">
                    {section.title}
                  </span>
                </div>
                <div
                  className={`text-gray-500 transition-transform duration-300 transform ${
                    openSection === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FaChevronDown />
                </div>
              </button>
              {/* Section Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="mt-3 text-sm text-gray-600 p-4">
                  {section.content.map((item, i) => (
                    <li key={i} className="mb-1">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
