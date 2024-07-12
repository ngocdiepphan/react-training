import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Category from './index';
import { recipe } from 'mocks/recipe';

export default {
  title: 'Components/Category',
  component: Category,
} as Meta;

const Template: StoryFn = (args) => <Category {...args} />;

export const Default = Template.bind({});
Default.args = {recipe};
