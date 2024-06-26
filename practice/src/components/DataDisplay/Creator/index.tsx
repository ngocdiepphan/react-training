import React from "react";
import creator from "@/assets/images/recipe-details/tricia-albert.png";

const Creator: React.FC = () => {
  return (
    <>
      <li className="flex flex-row items-center gap-8">
        <img className="w-30 h30" src={creator} alt="Picture creator" />
        <p className="font-sans text-xs">Tricia Albert</p>
      </li>
    </>
  );
};
export default Creator;
