import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FooterContact from './index'; 

export default {
  title: 'Components/FooterContact',
  component: FooterContact,
} as Meta;

const Template: StoryFn = (args) => <FooterContact {...args} />;

export const Default = Template.bind({});
Default.args = {};
