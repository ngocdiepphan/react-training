import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Toolbar } from "components";

// Type
import { ToolbarProps } from "components/Toolbar";
export default {
  title: "Components/Toolbar",
  component: Toolbar,
  argTypes: {
    title: { control: "text" },
    showTitle: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<ToolbarProps> = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "User",
  showTitle: true,
};
