import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemMenu from './index';

export default {
  title: 'Components/ItemMenu',
  component: ItemMenu,
} as Meta;

const Template: StoryFn = (args) => (
  <Router>
    <ItemMenu {...args} />
  </Router>
);

export const Default = Template.bind({});
