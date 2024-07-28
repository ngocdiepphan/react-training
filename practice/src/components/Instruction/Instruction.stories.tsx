import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { Instruction } from "components";

// TypeA
import { InstructionProps } from "components/Instruction";

export default {
  title: "Components/Instruction",
  component: Instruction,
} as Meta;

const Template: StoryFn<InstructionProps> = (args) => <Instruction {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipe: {
    instruction: [
      {
        step: 1,
        description:
          "Season the ground beef with salt and pepper, and form it into 4 equal patties.",
      },
      {
        step: 2,
        description:
          "Heat a skillet or grill over medium-high heat and cook the patties for 4-5 minutes per side, or until desired doneness. Add a slice of cheddar cheese on top of each patty during the last minute of cooking to melt.",
      },
      {
        step: 3,
        description:
          "In a separate skillet, cook the bacon until crispy. Remove and drain on paper towels.",
      },
      {
        step: 4,
        description:
          "In the same skillet, fry the eggs to your preferred doneness (sunny side up, over easy, etc.).",
      },
      { step: 5, description: "Toast the burger buns until golden brown." },
    ],
  },
};
