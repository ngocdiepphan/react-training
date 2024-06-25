import React from "react";
import star from '@/assets/images/delicious/star.svg';

const Rating: React.FC = () => {
  return(
    <>
    <div className="w-14 h-14 flex flex-row gap-5">
      <img
      src={star}
      className=""
      alt="Rating star"
      />
      <img
      src={star}
      className=""
      alt="Rating star"
      />
      <img
      src={star}
      className=""
      alt="Rating star"
      />
      <img
      src={star}
      className=""
      alt="Rating star"
      />
      <img
      src={star}
      className=""
      alt="Rating star"
      />
    </div>
    </>
  )
}
export default Rating;
