import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import SelectInput from './SelectInput';

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
  argTypes: {},
} as Meta<typeof SelectInput>;

const Template: StoryFn<typeof SelectInput> = (args) => <SelectInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  options: [
    {
      value: 'serviceA',
      label: 'Aサービスについて',
    },
    {
      value: 'serviceB',
      label: 'Bサービスについて',
    },
    {
      value: 'serviceC',
      label: 'Cサービスについて',
    },
  ],
};
