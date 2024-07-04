import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import UserItem, { UserItemProps } from "./index";

export default {
  title: "Components/UserItem",
  component: UserItem,
} as Meta;

const Template: StoryFn<UserItemProps> = (args) => <UserItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  email: "user@example.com",
  username: "Qiu Xun",
  img: "https://i.imgur.com/zJmTqKWb.jpg",
};

export const AdminUser = Template.bind({});
AdminUser.args = {
  email: "admin@example.com",
  username: "Nell Blue",
  img: "https://i.imgur.com/B8ta5Aab.jpg",
};
