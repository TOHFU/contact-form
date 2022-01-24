import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckInput from './CheckInput';

export default {
  title: 'Components/CheckInput',
  component: CheckInput,
  argTypes: {},
} as ComponentMeta<typeof CheckInput>;

const Template: ComponentStory<typeof CheckInput> = (args) => <CheckInput {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
