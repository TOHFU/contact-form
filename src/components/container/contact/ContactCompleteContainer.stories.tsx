import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContactCompleteContainer from './ContactCompleteContainer';

export default {
  title: 'Container/ContactCompleteContainer',
  component: ContactCompleteContainer,
  argTypes: {},
} as ComponentMeta<typeof ContactCompleteContainer>;

const Template: ComponentStory<typeof ContactCompleteContainer> = (args) => {
  return <ContactCompleteContainer {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};
