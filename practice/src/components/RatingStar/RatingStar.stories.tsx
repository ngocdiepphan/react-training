import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { RatingStar } from "components";

export default {
  title: "Components/RatingStar",
  component: RatingStar,
  argTypes: {
    ratings: { control: "number" },
  },
} as Meta;

const Template: StoryFn<{ ratings: number }> = (args) => (
  <RatingStar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ratings: 3,
};
