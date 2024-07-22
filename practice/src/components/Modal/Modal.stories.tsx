import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal from './index';
import '../TextField';
import '../Options/Category';
import '../Options/Rating';
import '../Buttons';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
};
