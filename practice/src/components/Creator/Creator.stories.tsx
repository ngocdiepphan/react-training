import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Creator, { Props } from './index';

export default {
  title: 'Components/Creator',
  component: Creator,
} as Meta;

const Template: StoryFn<Props> = (args) => <Creator {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipe: {
    creator: 'John Doe',
    imgCreator: 'https://docs.webix.com/usermanager-backend/users/87/avatar/503723673.jpg',
  },
};
