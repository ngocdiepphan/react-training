import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import InfoUser from "./index";
import { ProfileProps } from "@/type/profile";

export default {
  title: "Components/InfoUser",
  component: InfoUser,
} as Meta;

const Template: StoryFn<ProfileProps> = (args) => <InfoUser {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Jelanee Uwaezuoke",
  status: "45 min ago",
  img: "https://i.imgur.com/zJmTqKWb.jpg",
};
