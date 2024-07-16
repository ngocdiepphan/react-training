import React from "react";
interface ToolbarProps {
  title: string;
}
const Toolbar: React.FC<ToolbarProps> = ({ title }) => {
  return (
    <div className="flex flex-row justify-between items-center border borderPrimary border-b-0 px-12 py-10 overflow-hidden bg-primary">
      <p className="text-xl font-semibold text-quaternary font-sans">{title}</p>
      <span className="bg-search-icon w-32 h-35 bg-no-repeat"></span>
    </div>
  );
};

export default Toolbar;
