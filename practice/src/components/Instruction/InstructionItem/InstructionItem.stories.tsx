import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { InstructionItem } from "components";

// Type
import { InstructionItemProps } from "components/Instruction/InstructionItem";

export default {
  title: "Components/InstructionItem",
  component: InstructionItem,
} as Meta;

const Template: StoryFn<InstructionItemProps> = (args) => (
  <InstructionItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stepNumber: 1,
  stepDescription: "Preheat your oven to 175°C (350°F).",
};
