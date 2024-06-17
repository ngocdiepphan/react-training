import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import JoditEditor from './Editor';

export default {
  title: 'Components/JoditEditor',
  component: JoditEditor,
  argTypes: {
    content: {
      control: 'text',
    },
    config: {
      control: 'object', 
    },
  }
} as Meta;

const Template: StoryFn = (args) => <JoditEditor {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithInitialContent = Template.bind({});
WithInitialContent.args = {
  content: '<p>This is some initial content.</p>',
};

export const ReadonlyMode = Template.bind({});
ReadonlyMode.args = {
  config: {
    ...Default.args.config,
    readonly: true,
  },
};

export const CustomToolbarButtons = Template.bind({});
CustomToolbarButtons.args = {
  config: {
    ...Default.args.config,
    buttons: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'image'],
  },
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  config: {
    ...Default.args.config,
    height: 300,
  },
};
