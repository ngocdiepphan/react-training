import React from 'react';

// Components
import { Profiles, Button } from 'components';

// Type
import { profileData } from 'mocks/profile';

const Interact: React.FC = () => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <p className="text-3xl md:text-6xl font-serif">
        Comments
        <sub className="text-base md:text-2xl font-serif">(25)</sub>
      </p>
      <Profiles profiles={profileData} />
      <Button type="button" variant="loadComment">
        Load 25 more comments
      </Button>
    </section>
  );
};

export default Interact;
