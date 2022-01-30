import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'secondary button',
  fill: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'rounded button',
  round: true,
};

export const WithNextIcon = Template.bind({});
WithNextIcon.args = {
  label: 'button with next icon',
  arrow: 'next',
};

export const WithPrevIcon = Template.bind({});
WithPrevIcon.args = {
  label: 'button with prev icon',
  arrow: 'prev',
};
