import React from "react";

const Statistics: React.FC = () => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <div className="flex flex-row items-center justify-between gap-10 font-sans text-xs-small md:text-sm mb-14">
        <div className="flex flex-row justify-end gap-16">
          <span className="w-20 h-20 bg-arrow-up"></span>
          <p>85% would make this again</p>
        </div>
        <div className="flex flex-row justify-end gap-16">
          <span className="bg-upload-primary md:bg-upload-secondary w-20 h-20 md:w-24 md:h-30 bg-no-repeat"></span>
          <span className="md:bg-save-secondary bg-save-primary w-14 h-16 md:w-22 md:h-27"></span>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
