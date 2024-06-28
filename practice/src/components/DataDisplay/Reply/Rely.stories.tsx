import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Reply, { ReplyProps } from "./index";

export default {
  title: "Components/Reply",
  component: Reply,
  argTypes: {
    replyCount: { control: { type: 'number' } },
  },
} as Meta;

const Template: StoryFn<ReplyProps> = (args) => <Reply {...args} />;

export const Default = Template.bind({});
Default.args = {
  replyCount: 2,
};
