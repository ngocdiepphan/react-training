import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CreateDate, { Props } from './index';

export default {
  title: 'Components/CreateDate',
  component: CreateDate,
} as Meta;

const Template: StoryFn<Props> = (args) => <CreateDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipe: {
    createdAt: '2023-07-12',
  },
};



