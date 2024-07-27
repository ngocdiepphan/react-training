import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { PanelForm } from "components";

// Types
import { PanelFormProps } from "components/Panel/PanelForm";
import { recipeColumns, userColumns } from "type/table";

// Mocks
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
