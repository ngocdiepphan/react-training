import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Reply } from "components";

// Type
import { ReplyProps } from "components/Reply";

export default {
  title: "Components/Reply",
  component: Reply,
  argTypes: {
    replyCount: { control: { type: "number" } },
  },
} as Meta;

const Template: StoryFn<ReplyProps> = (args) => <Reply {...args} />;

export const Default = Template.bind({});
Default.args = {
  replyCount: 2,
};
