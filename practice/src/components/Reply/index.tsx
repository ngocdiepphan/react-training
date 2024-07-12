import React from "react";

export interface ReplyProps {
  replyCount: number;
}

const Reply: React.FC<ReplyProps> = ({ replyCount }) => {
  return (
    <div className="flex flex-row gap-5">
      <span className="bg-reply w-14 h-24 bg-no-repeat"></span>
      <p className="font-sans text-secondary text-xs">Reply ({replyCount})</p>
    </div>
  );
};

export default Reply;
