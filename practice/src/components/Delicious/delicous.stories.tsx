import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

// Component
import { Delicious } from "components";

// Type
import { DeliciousProps } from "components/Delicious";

const Recipes = [
  {
    name: "Triple Decker Cranberry Cake",
    img: "https://github.com/user-attachments/assets/69f7b7b9-8c3d-4e80-ba7c-0a6607826e23",
    description:
      "A delicious pasta dish with creamy spinach and cheese sauce, perfect for a quick and comforting meal.",
    ingredient: ["2 tablespoons olive oil", "3 cloves garlic, minced"],
    instruction: [
      {
        step: 1,
        description:
          "Cook pasta according to package instructions until al dente. Drain and set aside.",
      },
    ],
    nutrition: [
      { label: "Calories", value: "550" },
      { label: "Total Fat", value: "32g" },
    ],
    creator: "Jack Ryan",
    imgCreator:
      "https://github.com/user-attachments/assets/bbdb4e2c-e163-4c94-b129-a8999920d7a8",
    collection_id: 4,
    category: "Main Course",
    ratings: 5,
    createdAt: "2024-07-16",
    id: "26",
    prepTime: { min: "20 minutes", max: "25 minutes" },
    serving: "Serves 4",
    comments: 30,
  },
];

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

const Template: StoryFn<DeliciousProps> = (args) => <Delicious {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Super Delicious",
  id: "delicious-recipes",
  collection: 4,
  recipes: Recipes,
};
