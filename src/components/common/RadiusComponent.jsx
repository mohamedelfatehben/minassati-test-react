/* eslint-disable react/prop-types */
function RadiusComponent({ content, background }) {
  return (
    <div
      className="px-4 py-2 text-white rounded-tr-3xl rounded-bl-3xl text-sm h-fit w-fit text-center"
      style={{ backgroundColor: background ?? "#32227E" }}
    >
      {content}
    </div>
  );
}

export default RadiusComponent;
