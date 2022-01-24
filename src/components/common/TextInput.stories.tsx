import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
