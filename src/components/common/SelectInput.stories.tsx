import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectInput from './SelectInput';

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
  argTypes: {},
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => <SelectInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  options: [
    {
      value: '',
      label: '選択してください',
    },
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
