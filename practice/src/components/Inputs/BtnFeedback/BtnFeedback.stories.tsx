import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import BtnFeedback from "./index"; 

export default {
  title: "Components/BtnFeedback",
  component: BtnFeedback,
} as Meta;

const Template: StoryFn = (args) => <BtnFeedback {...args} />;

export const Default = Template.bind({});
Default.args = {};
