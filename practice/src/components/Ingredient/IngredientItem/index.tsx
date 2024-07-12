import React from 'react';

export interface IngredientItemProps {
  label: string;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ label }) => {
  return (
    <li className="flex flex-row gap-16 pb-27">
      <input type="checkbox" className="w-24 h-24" />
      <p className="font-sans text-base">{label}</p>
    </li>
  );
};

export default IngredientItem;
