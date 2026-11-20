import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import TextAreaInput from './TextAreaInput';

export default {
  title: 'Components/TextAreaInput',
  component: TextAreaInput,
  argTypes: {},
} as Meta<typeof TextAreaInput>;

const Template: StoryFn<typeof TextAreaInput> = (args) => <TextAreaInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
