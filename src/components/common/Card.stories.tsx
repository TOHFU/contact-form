import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Card Title',
};
