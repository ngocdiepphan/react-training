import React from "react";
import arrowRight from '@/assets/images/banner/arrows-right.svg';

const Banner: React.FC = () => {
  return(
    <>
    <div className="w-40 h-40 bg-primary hover:bg-orange-400 ml-auto bg-center flex justify-center items-center">
      <img
      src={arrowRight}
      className=""
      alt="Arrow right"
      />
    </div>
    </>
  )
}
export default Banner;
