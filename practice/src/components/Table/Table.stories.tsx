import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";

// Component
import { Table } from "components";

// Types
import {
  TableColumn,
  userColumns,
  recipeColumns,
  RecipeRow
} from "type/table";

import { UserProps } from "type/user";

// Mocks
import { user } from "mocks/user";
import { recipe } from "mocks/recipe";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;

const UserTemplate: StoryFn<{
  columns: TableColumn<UserProps>[];
  data: UserProps[];
  onRowClick: (rowData: UserProps) => void;
}> = (args) => <Table {...args} />;

export const UserTable = UserTemplate.bind({});
UserTable.args = {
  columns: userColumns,
  data: user,
  onRowClick: fn(),
};

const RecipeTemplate: StoryFn<{
  columns: TableColumn<RecipeRow>[];
  data: RecipeRow[];
  onRowClick: (rowData: RecipeRow) => void;
}> = (args) => <Table {...args} />;

export const RecipeTable = RecipeTemplate.bind({});
RecipeTable.args = {
  columns: recipeColumns,
  data: recipe,
  onRowClick: fn(),
};
