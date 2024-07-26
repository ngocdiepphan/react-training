import React from "react";

interface ToolbarProps {
  title: string;
  showTitle: boolean;
}
const Toolbar = ({ title, showTitle }: ToolbarProps) => {
  return (
    <div className="flex flex-row justify-between items-center border border-b-2 borderPrimary px-12 py-10 overflow-hidden bg-primary">
      {showTitle && (
        <p className="text-xl font-semibold text-quaternary font-sans sticky top-0 z-auto">
          {title}
        </p>
      )}
      <span className="bg-search-icon w-32 h-35 bg-no-repeat"></span>
    </div>
  );
};

export default Toolbar;
