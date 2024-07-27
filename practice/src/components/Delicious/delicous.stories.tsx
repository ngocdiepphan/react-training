import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

// Component
import { Delicious } from "components";

export interface RecipeList {
  title: string;
  id: string;
  collection: number;
  recipes: Recipe[];
}
export interface Recipe {
  id: string;
  name: string;
  img: string;
  ratings: number;
}
export default {
  title: "Components/Delicious",
  component: Delicious,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn<RecipeList> = (args) => <Delicious {...args} />;


export const Default = Template.bind({});
Default.args = {
  title: "Supper Delicious",
  id: "recipe-list",
  collection: 1,
  recipes: [
    {
      id: "3",
      name: "Tiramisu",
      img: "https://github.com/user-attachments/assets/cddd6f06-5a51-43b7-8b99-f393328ad6ed",
      ratings: 5,
    },
  ],
};
