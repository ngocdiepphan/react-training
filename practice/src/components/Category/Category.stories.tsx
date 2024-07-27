import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { Category } from "components";

import { CateProps } from "components/Category";
export default {
  title: "Components/Category",
  component: Category,
} as Meta;

const Template: StoryFn<CateProps> = (args) => <Category {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "2",
  category: "Pasta",
  img: "https://github.com/user-attachments/assets/053aa27d-7592-4e13-aa31-cdf3cd33c3de",
};
