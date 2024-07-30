import React from "react";

// Component
import { Button } from "components";

const Comment: React.FC = () => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <div className="mt-48">
        <p className="">Write a comment</p>
        <p className="text-xs md:text-base font-sans">
          <a href="#" className="text-tertiary">
            Login
          </a>{" "}
          to post a comment
        </p>
      </div>

      <div className="relative">
        <textarea className="w-full h-340 bg-tertiary mt-16 mb-37 border-none p-20 lg:h-318"></textarea>
        <Button type="button" variant="post">
          Post comment
        </Button>
      </div>
    </section>
  );
};

export default Comment;
