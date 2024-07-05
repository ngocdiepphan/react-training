import React from 'react';
import TableRecipe from './index';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/TableRecipe',
  component: TableRecipe,
} as Meta;

const Template: StoryFn = () => <TableRecipe />;

export const Default = Template.bind({});
Default.args = {
};
