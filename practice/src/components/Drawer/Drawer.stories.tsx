import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import { Drawer } from "components";

// Type
import { DrawerProps } from "components/Drawer";

export default {
  title: "Components/Drawer",
  component: Drawer,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn<DrawerProps> = (args) => <Drawer {...args} />;

export const Default = Template.bind({});
Default.args = {
  onShowDrawer: true,
  onShowFormAdd: () => alert("Show Form Add"),
  onDrawerItemClick: (item) => alert(`Drawer item clicked: ${item}`),
  selectedTable: "recipe",
};
