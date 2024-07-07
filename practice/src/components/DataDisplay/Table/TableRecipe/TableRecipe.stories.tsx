import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RecipeTable from './index';
import { recipe } from 'mocks/recipe';
import { TableColumn, RecipeRow } from 'type/table';

export default {
  title: 'Components/RecipeTable',
  component: RecipeTable,
} as Meta;

const recipeColumns: TableColumn<RecipeRow>[] = [
  { key: 'img', header: 'Image' },
  { key: 'name', header: 'Name' },
  { key: 'category', header: 'Category' },
  { key: 'creator', header: 'Creator' },
  { key: 'createdAt', header: 'Created At' },
  { key: 'ratings', header: 'Ratings' },
  { key: 'description', header: 'Description' },
];

const Template: StoryFn = () => <RecipeTable />;

export const Default = Template.bind({});
Default.args = {
  columns: recipeColumns,
  data: recipe,
};
