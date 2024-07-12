import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import LastRecipe from './index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/LastRecipe',
  component: LastRecipe,
  decorators: [(Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )],
} as Meta;


const Template: StoryFn = (args) => <LastRecipe {...args} />;

export const Default = Template.bind({});
Default.args = {
};
