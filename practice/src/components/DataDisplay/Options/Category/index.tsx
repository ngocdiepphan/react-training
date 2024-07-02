import React from "react";
import InputField from "@/components/Inputs/TextField";
const OptionCategory: React.FC = () => {
  return (
    <div className="flex flex-row items-center mb-20">
      <label className="text-md w-80">Category</label>
      <select
        id="input_category"
        className="border w-full border-save outline-none p-8 h-30 cursor-pointer md:w-220 hover:border-hover"
      >
        <option value=""></option>
        <option value="Pasta">Pasta</option>
        <option value="Pizza">Pizza</option>
        <option value="Vegan">Vegan</option>
        <option value="Desserts">Desserts</option>
        <option value="Smoothies">Smoothies</option>
        <option value="Breakfast">Breakfast</option>
      </select>
    </div>
  );
};

export default OptionCategory;
