/* eslint-disable react/prop-types */
import { IoMdPersonAdd } from "react-icons/io";
import RadiusComponent from "../common/RadiusComponent";
import { RiUpload2Line } from "react-icons/ri";
import { MdKey, MdPeopleAlt } from "react-icons/md";
import { TbRosetteDiscountFilled } from "react-icons/tb";
import { GiSandsOfTime } from "react-icons/gi";

const CourseGroups = () => {
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const { primary_color = "#32227E", secondary_color = "#FF9900" } =
    appSettings;
  return (
    <div className="bg-white rounded-3xl shadow-md w-full max-w-md z-50">
      <RadiusComponent
        content={
          <span className="flex gap-x-2 text-lg md:text-2xl">
            <IoMdPersonAdd />
            <span> التسجيل في الدورة</span>
          </span>
        }
        background={secondary_color}
      />
      {/* Header */}
      <div className="mb-4  md:text-xl font-bold px-4">المجموعات المتوفرة</div>

      {/* Groups */}
      <div className="flex flex-col gap-y-4 px-4">
        {[1, 2, 3].map((group, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-2 md:flex-row items-center justify-between shadow p-4 rounded-3xl"
          >
            {/* Group Info */}
            <div className="text-gray-700 flex gap-x-2">
              <div className="flex flex-col gap-y-1">
                <MdPeopleAlt style={{ color: primary_color }} />
                <span>3/5</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span>سفيان و 2 أخرون</span>
                <div className="flex gap-x-1 text-sm items-center">
                  <GiSandsOfTime style={{ color: primary_color }} />
                  <span>05:23:47:32</span>
                </div>
              </div>
            </div>
            <div className="flex gap-x-1 px-2 items-center">
              <button
                className="rounded-full px-2 py-1 flex items-center gap-x-2 text-white hover:opacity-50"
                style={{ backgroundColor: primary_color }}
              >
                <IoMdPersonAdd className="" />
                <span>احجز مكانك الآن</span>
              </button>
              <RiUpload2Line style={{ color: primary_color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Enroll Now Button */}
      <div className="mt-6 flex justify-center px-4">
        <button
          className="py-2 px-4  w-full text-white text-lg font-medium rounded-3xl mx-auto transition-transform duration-300 hover:opacity-50"
          style={{ backgroundColor: secondary_color }}
        >
          سجل الآن
        </button>
      </div>

      {/* Note */}
      <div className="flex gap-x-2 items-center px-4 my-2">
        <MdKey className="text-lg" style={{ color: primary_color }} />
        <span className="text-lg font-semibold">
          صلاحيات الوصول: وصول دائم للدورة{" "}
        </span>
      </div>
      <div className="flex gap-x-2 items-center px-4 my-2">
        <TbRosetteDiscountFilled
          className="text-lg"
          style={{ color: primary_color }}
        />
        <span className="text-lg font-semibold">
          احصل على تخفيض 20٪ عند التسجيل الجماعي
        </span>{" "}
      </div>
    </div>
  );
};

export default CourseGroups;
