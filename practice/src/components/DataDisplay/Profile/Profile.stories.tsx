import React from "react";
import Profile from "./index";
import { profileData } from "@/mocks/profile";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Profile",
  component: Profile,
} as Meta;

const Template: StoryFn = () => <Profile />;

export const Default = Template.bind({});
Default.args = {
  profileData: profileData,
};
