import React from "react";
import iconBack from "@/assets/images/dashboards/back-icon.svg";
import Button from "@/components/Inputs/Buttons";

const Panel: React.FC = () => {
  return (
    <div className="bg-primary border border-gray-300 fixed h-full w-full top-0 left-0 m-0 md:right-auto lg:ml-10 lg:static lg:w-500">
      <div className="sticky top-0 flex items-center z-1 bg-white border-b border-gray-400">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center pl-20">
            <img className="" src={iconBack} alt="Icon back" />
          </div>
          <div className="flex-grow flex justify-center">
            <p className="py-20 cursor-pointer text-hoverPrimary font-bold hover:text-white hover:bg-hoverPrimary">
              General
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-40 justify-end m-30">
        <Button type="button" variant="confirm">
          Delete
        </Button>
        <Button type="button" variant="confirm">
          Save
        </Button>
      </div>
    </div>
  );
};

export default Panel;
