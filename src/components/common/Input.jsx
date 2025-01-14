/* eslint-disable react/prop-types */
function Input({ placeholder, icon, value, setValue }) {
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const { secondary_color = "#FF9900" } = appSettings;

  return (
    <div className="relative gap-2 rounded-full h-10 bg-white text-gray-700 shadow-md overflow-hidden w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="px-4 py-2 rounded-lg focus:outline-none w-full"
      />
      <span
        className="rounded-full text-white h-full w-max absolute top-0 end-0 px-4 py-2"
        style={{ backgroundColor: secondary_color }}
      >
        {icon}
      </span>
    </div>
  );
}

export default Input;
