import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FooterSocial from './index';

export default {
  title: 'Components/FooterSocial',
  component: FooterSocial,
} as Meta;

const Template: StoryFn = (args) => <FooterSocial {...args} />;

export const Default = Template.bind({});
Default.args = {};
