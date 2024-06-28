import React from "react";
import iconReply from "@/assets/images/recipe-details/reply.svg";

export interface ReplyProps {
  replyCount: number;
}

const Reply: React.FC<ReplyProps> = ({ replyCount }) => {
  return (
    <div className="flex flex-row gap-5">
      <img className="" src={iconReply} alt="Icon reply" />
      <p className="font-sans text-secondary text-xs">Reply ({replyCount})</p>
    </div>
  );
};

export default Reply;
