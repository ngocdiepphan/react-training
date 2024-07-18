import React from "react";

interface OptionRatingProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const OptionRating = ({ onChange }: OptionRatingProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };

  return (
    <div className="flex flex-row items-center mb-20 md:justify-around">
      <label className="w-80 text-xs md:text-xl">Rating</label>
      <select
        onChange={handleChange}
        id="input_ratings"
        className="border w-full border-buttonPrimary outline-none p-8 h-30 md:h-35 cursor-pointer md:w-220 hover:border-hoverPrimary"
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
