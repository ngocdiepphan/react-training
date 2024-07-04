import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import IngredientItem, { IngredientItemProps } from './index';
export default {
  title: 'Components/IngredientItem',
  component: IngredientItem,
} as Meta;

const Template: StoryFn<IngredientItemProps> = (args) => <IngredientItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '250ml sour cream',
};
