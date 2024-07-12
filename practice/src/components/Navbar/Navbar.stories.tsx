import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './index';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Router>
    <Navbar {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {};
