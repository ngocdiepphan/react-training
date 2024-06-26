import React from "react";
import createDate from "@/assets/images/recipe-details/icon-date.svg";

const CreateDate: React.FC = () => {
  return (
    <>
      <li className="flex flex-row items-center gap-8">
        <img className="w-14 h-14" src={createDate} alt="Picture CreateAt" />
        <p className="font-sans text-xs">Yesterday</p>
      </li>
    </>
  );
};
export default CreateDate;
