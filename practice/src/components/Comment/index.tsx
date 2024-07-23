import React from "react";

interface CommentsProps {
  count: number;
}

const CommentsCount: React.FC<CommentsProps> = ({ count }) => {
  return (
    <li className="flex flex-row gap-5">
      <span className="bg-reply w-14 h-14 bg-no-repeat"></span>
      <p className="text-xs-small text-primary">{count}</p>
    </li>
  );
};

export default CommentsCount;
