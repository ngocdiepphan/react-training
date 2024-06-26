import React from "react";

export interface NutritionItemProps {
  label: string;
  value: string;
}

const NutritionItem: React.FC<NutritionItemProps> = ({ label, value }) => {
  return (
    <li className="flex flex-row gap-16 font-sans justify-between p-5 border-b border-solid border-gray-300 hover:border-b-2 hover:border-solid hover:border-secondary">
      <p className="text-base">{label}</p>
      <p className="text-base">{value}</p>
    </li>
  );
};

export default NutritionItem;
