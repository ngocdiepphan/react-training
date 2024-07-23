import React from "react";
import { Meta, StoryFn } from "@storybook/react";

//Component
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
  title: "User",
  type: "user",
  icon: "user-item",
  className: "",
  onClick: () => console.log("DrawerItem clicked"),
};

export const Recipe = Template.bind({});
Recipe.args = {
  title: "Recipes",
  type: "recipe",
  icon: "recipe-item",
  className: "bg-recipe-item bg-red",
  onClick: () => console.log("DrawerItem clicked"),
};

