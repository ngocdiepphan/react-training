import React from "react";

const FooterSocial: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse md:justify-between md:mt-27">
      <div className="flex gap-30 mt-50 mb-24 md:mt-0">
        <span className="bg-facebook inline-block w-20 h-20 cursor-pointer hover:bg-slate-200"></span>
        <span className="bg-instagram inline-block w-20 h-20 cursor-pointer hover:bg-slate-200"></span>
        <span className="bg-twitter inline-block w-20 h-20 cursor-pointer hover:bg-slate-200"></span>
        <span className="bg-youtube inline-block w-20 h-20 cursor-pointer hover:bg-slate-200"></span>
      </div>
      <p className="font-sans flex text-xs text-secondary mb-24 md:mr-auto md:items-end">
        © 2020 Tastebite - All rights reserved
      </p>
    </section>
  );
};
export default FooterSocial;
