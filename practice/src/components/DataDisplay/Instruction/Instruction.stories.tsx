import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Instruction from "./index";
import { InstructionProps } from "@/type/recipe";
import { recipe } from "@/mocks/recipe";

export default {
  title: "Components/Instruction",
  component: Instruction,
} as Meta;

const Template: StoryFn<InstructionProps> = (args) => <Instruction {...args} />;

export const Default = Template.bind({});
Default.args = {
  instruction: recipe[1].instruction,
};
