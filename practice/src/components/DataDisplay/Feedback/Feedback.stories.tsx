import React from "react";
import Feedback from "./index";
import { Meta, StoryFn } from "@storybook/react/*";

export default {
  title: "Components/Feedback",
  component: Feedback,
} as Meta;

const Template: StoryFn = (args) => <Feedback {...args} />;

export const Default = Template.bind({});
Default.args = {};
