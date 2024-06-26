import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CreateDate from './index';

export default {
  title: 'Components/CreateDate',
  component: CreateDate,
} as Meta;

const Template: StoryFn = (args) => <CreateDate {...args} />;

export const Default = Template.bind({});
Default.args = {};
