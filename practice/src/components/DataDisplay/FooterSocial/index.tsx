import React from "react";
import iconFacebook from "@/assets/images/footer/facebook.svg";
import iconInstagram from "@/assets/images/footer/instagram.svg";
import iconTwitter from "@/assets/images/footer/twitter.svg";
import iconYoutube from "@/assets/images/footer/youtube.svg";

const FooterSocial: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-between md:mt-27">
      <div className="flex gap-30 mt-50 mb-24 md:mt-0">
        <img
          className="inline-block w-20 h-20 cursor-pointer hover:bg-slate-200"
          src={iconFacebook}
          alt="Icon facebook"
        />
        <img
          className="inline-block w-20 h-20 cursor-pointer hover:bg-slate-200"
          src={iconInstagram}
          alt="Icon Instagram"
        />
        <img
          className="inline-block w-20 h-20 cursor-pointer hover:bg-slate-200"
          src={iconTwitter}
          alt="Icon Twitter"
        />
        <img
          className="inline-block w-20 h-20 cursor-pointer hover:bg-slate-200"
          src={iconYoutube}
          alt="Icon Youtube"
        />
      </div>

      <p className="font-sans text-xs text-secondary mb-24 md:mr-auto">
        © 2020 Tastebite - All rights reserved
      </p>
    </div>
  );
};
export default FooterSocial;
