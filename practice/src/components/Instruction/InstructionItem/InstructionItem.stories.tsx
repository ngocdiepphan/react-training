import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import InstructionItem, { InstructionItemProps } from './index';

export default {
  title: 'Components/InstructionItem',
  component: InstructionItem,
} as Meta;

const Template: StoryFn<InstructionItemProps> = (args) => <InstructionItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  stepNumber: 1,
  stepDescription: 'Preheat your oven to 175°C (350°F).',
};
