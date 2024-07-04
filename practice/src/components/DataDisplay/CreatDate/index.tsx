import React from "react";

const CreateDate: React.FC = () => {
  return (
    <>
      <li className="flex flex-row items-center gap-8">
        <span className="bg-create-date w-14 h-14"></span>
        <p className="font-sans text-xs">Yesterday</p>
      </li>
    </>
  );
};
export default CreateDate;
