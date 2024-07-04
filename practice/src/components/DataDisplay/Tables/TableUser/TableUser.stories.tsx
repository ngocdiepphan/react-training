import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TableUser from "./index";
import { user } from "../../../../mocks/user";

export default {
  title: "Components/TableUser",
  component: TableUser,
} as Meta;

const Template: StoryFn = (args) => <TableUser {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: user,
};
