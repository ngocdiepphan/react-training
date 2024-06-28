import React from "react";
import { ProfileProps } from "@/type/profile";

const InfoUser: React.FC<ProfileProps> = ({ name, status, img }) => {
  return (
    <article className="mt-35">
      <div className="flex flex-row gap-20 pt-35 border-t border-t-gray-300 hover:border-t-primary">
        <img
          className="w-48 h-48 rounded-full"
          src={img}
          alt="Picture image user"
        />
        <div className="font-sans text-sm md:text-lg">
          <p>{name}</p>
          <p className="font-sans text-secondary text-sm md:text-base">
            {status}
          </p>
        </div>
      </div>
    </article>
  );
};

export default InfoUser;
