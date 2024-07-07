import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table from './index';
import { TableColumn, userColumns, recipeColumns} from 'type/table';
import { user } from 'mocks/user';
import { recipe } from 'mocks/recipe';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn<{ columns: TableColumn<any>[]; data: any[] }> = (args) => <Table {...args} />;

export const UserTable = Template.bind({});
UserTable.args = {
  columns: userColumns,
  data: user,
};

export const RecipeTable = Template.bind({});
RecipeTable.args = {
  columns: recipeColumns,
  data: recipe,
};
