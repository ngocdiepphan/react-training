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

export const BtnLoadMore = Template.bind({});
BtnLoadMore.args = {
  type: "button",
  variant: "primary",
  children: "Load more",
};

export const BtnRecipe = Template.bind({});
BtnRecipe.args = {
  type: "button",
  variant: "secondary",
  children: "156 Recipes",
};

export const BtnFeedback = Template.bind({});
BtnFeedback.args = {
  type: "button",
  variant: "feedback",
  children: "Share your feedback",
};

export const BtnJoin = Template.bind({});
BtnJoin.args = {
  type: "button",
  variant: "join",
  children: "join",
};

export const BtnLoadComment = Template.bind({});
BtnLoadComment.args = {
  type: "button",
  variant: "loadComment",
  children: "Load more 25 comment",
};

export const BtnPost = Template.bind({});
BtnPost.args = {
  type: "button",
  variant: "post",
  children: "Post comment",
};
