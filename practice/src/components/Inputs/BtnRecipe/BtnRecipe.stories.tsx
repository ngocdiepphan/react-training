import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import  BtnRecipe from './index';

export default {
  title: 'Components/ BtnRecipe',
  component:  BtnRecipe,
} as Meta;

const Template: StoryFn = (args) => < BtnRecipe {...args} />;

export const Default = Template.bind({});
Default.args = {};
