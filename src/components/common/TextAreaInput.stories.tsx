import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextAreaInput from './TextAreaInput';

export default {
  title: 'Components/TextAreaInput',
  component: TextAreaInput,
  argTypes: {},
} as ComponentMeta<typeof TextAreaInput>;

const Template: ComponentStory<typeof TextAreaInput> = (args) => <TextAreaInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
