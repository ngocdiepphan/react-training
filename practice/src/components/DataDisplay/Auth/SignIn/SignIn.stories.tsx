import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import SignInForm from './index';

export default {
  title: 'Components/SignInForm',
  component: SignInForm,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
  argTypes: {},
} as Meta;

const Story: StoryFn = (args) => <SignInForm {...args} />;

export const InputSignIn = Story.bind({});
InputSignIn.args = {};
