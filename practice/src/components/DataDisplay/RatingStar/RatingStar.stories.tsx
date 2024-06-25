import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Rating from './index';

export default {
  title: 'Components/Rating',
  component: Rating,
} as Meta;

const Template: StoryFn = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {};
