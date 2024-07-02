import React from "react";

const OptionRating: React.FC = () => {
  return (
    <>
      <select
        id="input_ratings"
        className="border border-save w-180 p-8 outline-none h-40 cursor-pointer md:w-220 hover:border-hover"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default OptionRating;
