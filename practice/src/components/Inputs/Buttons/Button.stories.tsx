import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "button",
  variant: "primary",
  children: "Load more",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "button",
  variant: "secondary",
  children: "156 Recipes",
};

export const Feedback = Template.bind({});
Feedback.args = {
  type: "button",
  variant: "feedback",
  children: "Share your feedback",
};

export const Join = Template.bind({});
Join.args = {
  type: "button",
  variant: "join",
  children: "join",
};

export const LoadComment = Template.bind({});
LoadComment.args = {
  type: "button",
  variant: "loadComment",
  children: "Load more 25 comment",
};

export const Post = Template.bind({});
Post.args = {
  type: "button",
  variant: "post",
  children: "Post comment",
};
