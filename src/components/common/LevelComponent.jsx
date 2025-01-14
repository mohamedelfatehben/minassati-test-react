/* eslint-disable react/prop-types */

function LevelComponent({ course_level }) {
  const levelData = {
    مبتدئ: { color: "bg-green-500", bars: [true, false, false] },
    متوسط: { color: "bg-yellow-500", bars: [true, true, false] },
    متقدم: { color: "bg-red-500", bars: [true, true, true] },
    "جميع المستويات": { color: "bg-purple-500", bars: [true, true, true] },
  };
  return (
    <div
      className={`flex items-center gap-1 rounded-full px-2 ${
        levelData[course_level]?.color || "bg-gray-400"
      }`}
    >
      {levelData[course_level]?.bars.map((isFilled, idx) => (
        <div
          key={idx}
          className={`w-2 border border-white h-fit ${
            !isFilled ? "bg-transparent" : "bg-white"
          }`}
          style={{
            height: `${(idx + 1) * 4}px`, // Dynamically calculate height in pixels
            borderWidth: "1.5px",
          }}
        ></div>
      ))}
      <span className={`ml-2 py-1 text-sm text-white`}>{course_level}</span>
    </div>
  );
}

export default LevelComponent;
