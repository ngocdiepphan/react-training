import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { DrawerItem } from "components";

// Type
import { DrawerItemProps } from "components/Drawer/DrawerItem";

export default {
  title: "Components/DrawerItem",
  component: DrawerItem,
} as Meta;

const Template: StoryFn<DrawerItemProps> = (args) => <DrawerItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Example Item",
  type: "default",
  icon: "default-icon",
};
