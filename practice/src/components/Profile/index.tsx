import React from "react";

// Components
import { InfoUser, Reply, Favorite } from "components";

// Type
import { Profile } from "type/profile";

export interface ProfilesProps {
  profiles: Profile[];
}

const Profiles: React.FC<ProfilesProps> = ({ profiles }) => {
  return (
    <article className="my-35">
      {profiles.map((profile) => (
        <div key={profile.id} className="flex flex-col gap-20">
          <InfoUser
            id={profile.id}
            name={profile.name}
            status={profile.status}
            img={profile.img}
            reply={profile.reply}
            favorite={profile.favorite}
            comments={profile.comments}
          />
          <p className="pl-64 text-sm md:text-base font-sans">
            {profile.comments}
          </p>
          <div className="pl-64 flex flex-row gap-27">
            <Reply replyCount={profile.reply} />
            <Favorite favoriteCount={profile.favorite} />
            <p className="font-sans text-secondary text-xs">▫️▫️▫️ More</p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Profiles;
