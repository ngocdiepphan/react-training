import React from "react";
import logo from '@/assets/images/logo/logo.svg';

const FooterDesc: React.FC = () => {
  return (
    <div className="flex flex-col">
    <a href="javascript:void(0)">
      <img className="w-110 md:w-160 mt-40 md:mt-72"
      src={logo} alt="Picture logo footer" />
    </a>
    <p className="font-sans text-sm text-secondary mt-18 mb-56 w-362 md:w-287 md:text-base lg:w-370">
      "On the other hand, we denounce with righteous indignation and
      dislike men who are so beguiled and demoralized by the charms of
      pleasure of the moment
    </p>
  </div>
  );
};
export default FooterDesc;
