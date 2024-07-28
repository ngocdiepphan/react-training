import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { Collection } from "components";

// Type
import { CollectionProps } from "components/Collection";

export default {
  title: "Components/Collection",
  component: Collection,
} as Meta;

const Template: StoryFn<CollectionProps> = (args) => <Collection {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "2",
  name: "Fancy Glazed Dounts",
  img: "https://github.com/user-attachments/assets/d12045b1-9820-4fa9-9a85-23f66ff92071",
  recipes: 30,
};
