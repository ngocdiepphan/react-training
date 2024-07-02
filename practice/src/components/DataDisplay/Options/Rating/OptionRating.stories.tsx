import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import OptionRating from "./index";

export default {
  title: "Components/OptionRating",
  component: OptionRating,
} as Meta;

const Template: StoryFn = () => <OptionRating />;

export const Default = Template.bind({});
