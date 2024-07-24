import React from "react";

export interface CreatorProps {
  creator: string;
  imgCreator: string;
}

const Creator = ({ creator, imgCreator }: CreatorProps) => {
  return (
    <div className="flex flex-row items-center gap-8">
      <img
        className="w-30 h-30 rounded-full"
        src={imgCreator}
        alt={`Picture of ${creator}`}
      />
      <p className="font-sans text-xs">{creator}</p>
    </div>
  );
};

export default Creator;
