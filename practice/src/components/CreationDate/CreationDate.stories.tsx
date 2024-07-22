import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { CreationDate } from "components";

// Type
import { Props } from "components/CreationDate";

export default {
  title: "Components/CreationDate",
  component: CreationDate,
} as Meta;

const Template: StoryFn<Props> = (args) => <CreationDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipe: {
    createdAt: "2023-07-12",
  },
};
