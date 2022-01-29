import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
    type: {
      options: ['text', 'email', 'number', 'tel'],
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [value, setValue] = useState<string>(args.value ?? '');
  return (
    <TextInput
      {...args}
      onChange={(event) => {
        args.onChange(event);
        setValue(event.target.value);
      }}
      value={value}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  value: '',
  placeholder: 'Here is a sample placeholder.',
  type: 'text',
  hasError: false,
};

export const Active = Template.bind({});
Active.args = {
  value: 'Lorem ipsum dolor sit amet.',
  placeholder: 'Here is a sample placeholder.',
  type: 'text',
  hasError: false,
};
Active.parameters = {
  pseudo: { active: true },
};

export const Error = Template.bind({});
Error.args = {
  value: 'Lorem ipsum dolor sit amet.',
  placeholder: 'Here is a sample placeholder.',
  type: 'text',
  hasError: true,
};
