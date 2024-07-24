import React, { ReactNode } from "react";

interface ChipProps {
  label: string;
  icon?: ReactNode;
}

const Chip: React.FC<ChipProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-row gap-8 items-center">
      {icon && <div className="flex flex-row items-center gap-8">{icon}</div>}
      <p className="font-sans text-xs">{label}</p>
    </div>
  );
};

export default Chip;
