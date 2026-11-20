import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import ContactCompleteContainer from './ContactCompleteContainer';

export default {
  title: 'Container/ContactCompleteContainer',
  component: ContactCompleteContainer,
  argTypes: {},
} as Meta<typeof ContactCompleteContainer>;

const Template: StoryFn<typeof ContactCompleteContainer> = (args) => {
  return <ContactCompleteContainer {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};
