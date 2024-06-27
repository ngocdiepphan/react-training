import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import PrepTimeItem from "./index";

export default {
  title: "Components/PrepTimeItem",
  component: PrepTimeItem,
} as Meta;

const Template: StoryFn = (args) => <PrepTimeItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
