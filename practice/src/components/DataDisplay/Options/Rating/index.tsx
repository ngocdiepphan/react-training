import React from "react";

const OptionRating: React.FC = () => {
  return (
    <div className="flex flex-row items-center mb-20">
    <label className="w-80">Rating</label>
      <select
        id="input_ratings"
        className="border w-full border-save outline-none p-8 h-30 cursor-pointer md:w-220 hover:border-hover"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default OptionRating;
