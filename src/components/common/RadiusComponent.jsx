/* eslint-disable react/prop-types */
function RadiusComponent({ content }) {
  const appSettings = JSON.parse(localStorage.getItem("app_settings")) || {};
  const { primary_color = "#32227E" } = appSettings;
  return (
    <div
      className="px-4 py-2 text-white rounded-tr-3xl rounded-bl-3xl text-sm h-fit"
      style={{ backgroundColor: primary_color }}
    >
      {content}
    </div>
  );
}

export default RadiusComponent;
