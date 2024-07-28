import React from 'react';

// Components
import {
  InfoUser,
  Reply,
  Favorite,
  Button
} from 'components';

// Mock
import { profileData } from 'mocks/profile';

const Interact: React.FC = () => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <div className="mb-37 md:mb-40 border-b hover:border-b-8 hover:border-tertiary">
        <p className="text-3xl font-serif mb-18 md:mb-20 md:text-6xl">
          Already made this?
        </p>
        <Button type="button" variant="action">
          Share your feedback
        </Button>
      </div>
      <p className="text-3xl md:text-6xl font-serif">
        Comments
        <sub className="text-base md:text-2xl font-serif">(25)</sub>
      </p>
      <article className="my-35">
        {profileData.map((profile) => (
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
      <Button type="button" variant="loadComment">
        Load 25 more comments
      </Button>
    </section>
  );
};

export default Interact;
