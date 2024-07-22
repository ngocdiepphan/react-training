import React from "react";
import Button from "../Buttons";

const Form: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:justify-center md:gap-0">
      <input
        type="text"
        className="h-48 pl-20 md:w-500 rounded-md md:h-64 md:rounded-tl-md md:rounded-bl-md md:rounded-r-none md:border-r-white"
      />
      <Button type="button" variant="join">
        join
      </Button>
    </div>
  );
};
export default Form;
