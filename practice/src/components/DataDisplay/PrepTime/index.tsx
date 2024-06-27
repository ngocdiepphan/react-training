import React from "react";
import PrepTimeItem from "@/components/DataDisplay/PrepTimeItem/index";
import Serving from "@/components/DataDisplay/Serving/index";
import iconPrint from "@/assets/images/recipe-details/print.svg";

const PrepTime: React.FC = () => {
  return (
    <ul className="flex flex-row items-center gap-8 mx-20">
      <PrepTimeItem />
      <PrepTimeItem />
      <Serving />
      <img className="ml-32 w-18 h-20" src={iconPrint} alt="Icon print" />
    </ul>
  );
};

export default PrepTime;
