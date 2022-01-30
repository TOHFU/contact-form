import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContactInputContainer from './ContactInputContainer';

export default {
  title: 'Container/ContactInputContainer',
  component: ContactInputContainer,
  argTypes: {},
} as ComponentMeta<typeof ContactInputContainer>;

const Template: ComponentStory<typeof ContactInputContainer> = (args) => {
  return <ContactInputContainer {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};

export const Filled = Template.bind({});
Filled.args = {
  formValues: {
    firstName: '阿夫利',
    lastName: '太郎',
    firstNameKana: 'たなか',
    lastNameKana: 'たろう',
    company: '株式会社サンプル',
    email: 'test@example.com',
    postalcode: '2591107',
    address: '神奈川県伊勢原市大山355',
    phone: '00000000000',
    service: 'serviceA',
    title: 'ここにテキストが入ります。',
    content: 'ここにテキストが入ります。',
    agreement: true,
  },
};
