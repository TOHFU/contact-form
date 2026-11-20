import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import Field from './Field';
import TextInput from './TextInput';
import CheckInput from './CheckInput';

export default {
  title: 'Components/Field',
  component: Field,
  argTypes: {},
} as Meta<typeof Field>;

const Template: StoryFn<typeof Field> = (args) => <Field {...args} />;

export const WithTextInput = Template.bind({});
WithTextInput.args = {
  label: 'TextInput',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  children: <TextInput onChange={() => {}} onBlur={() => {}} />,
};

export const WithCheckInput = Template.bind({});
WithCheckInput.args = {
  label: 'CheckInput',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  children: <CheckInput checked={true} onChange={() => {}} text={'Checkbox'} onBlur={() => {}} />,
};
