import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { Serving } from "components";

// Type
import { ServingProp } from "components/Serving";

export default {
  title: "Components/Serving",
  component: Serving,
} as Meta;

const Template: StoryFn<ServingProp> = (args) => <Serving {...args} />;

export const Default = Template.bind({});
Default.args = {
  serving: "4 people",
};
