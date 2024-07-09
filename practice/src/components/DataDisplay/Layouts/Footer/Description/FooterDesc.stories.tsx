import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FooterDesc from './index';

export default {
  title: 'Components/FooterDesc',
  component: FooterDesc,
} as Meta;

const Template: StoryFn = (args) => <FooterDesc {...args} />;

export const Default = Template.bind({});
Default.args = {};
