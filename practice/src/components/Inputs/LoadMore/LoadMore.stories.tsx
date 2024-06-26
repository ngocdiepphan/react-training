import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import LoadMore from './index'; 

export default {
  title: 'Components/LoadMore',
  component: LoadMore,
} as Meta;

const Template: StoryFn = (args) => <LoadMore {...args} />;

export const Default = Template.bind({});
Default.args = {};
