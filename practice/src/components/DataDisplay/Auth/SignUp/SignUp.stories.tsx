import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SignUpForm from './index';

export default {
  title: 'Components/SignUpForm',
  component: SignUpForm,
  argTypes: {},
} as Meta;

const Story: StoryFn<typeof SignUpForm> = (args) => <SignUpForm {...args} />;

export const InputSignUp = Story.bind({});
InputSignUp.args = {};
