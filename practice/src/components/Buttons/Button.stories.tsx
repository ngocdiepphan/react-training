import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Button } from "components";

// Type
import { ButtonProps } from "components/Buttons";

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

export const Action = Template.bind({});
Action.args = {
  type: "button",
  variant: "action",
  children: "Recipe",
};

export const LoadComment = Template.bind({});
LoadComment.args = {
  type: "button",
  variant: "loadComment",
  children: "Load Comment",
};

export const Post = Template.bind({});
Post.args = {
  type: "button",
  variant: "post",
  children: "Post Comment",
};

export const Submit = Template.bind({});
Submit.args = {
  type: "submit",
  variant: "submit",
  children: "Sign In",
};

export const Add = Template.bind({});
Add.args = {
  type: "button",
  variant: "add",
  children: "Add Recipe",
};
