import React, { ReactNode } from "react";

export interface ChipProps {
  label: string;
  icon?: ReactNode;
}

const Chip = ({ icon, label }: ChipProps) => {
  return (
    <div className="flex flex-row gap-8 items-center">
      {icon && <div className="flex flex-row items-center gap-8">{icon}</div>}
      <p className="font-sans text-xs">{label}</p>
    </div>
  );
};

export default Chip;
