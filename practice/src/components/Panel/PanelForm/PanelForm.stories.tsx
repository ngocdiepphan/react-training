import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import PanelForm, { PanelFormProps } from "./index";
import { recipeColumns, userColumns } from "type/table";
import { user } from "mocks/user";
import { recipe } from "mocks/recipe";

export default {
  title: "Components/PanelForm",
  component: PanelForm,
} as Meta;

const Template: StoryFn<PanelFormProps<any>> = (args) => (
  <PanelForm {...args} />
);

export const UserPanel = Template.bind({});
UserPanel.args = {
  columns: userColumns,
  data: user,
};

export const RecipePanel = Template.bind({});
RecipePanel.args = {
  columns: recipeColumns,
  data: recipe,
};
