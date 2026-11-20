import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import ContactConfirmContainer from './ContactConfirmContainer';

export default {
  title: 'Container/ContactConfirmContainer',
  component: ContactConfirmContainer,
  argTypes: {},
} as Meta<typeof ContactConfirmContainer>;

const Template: StoryFn<typeof ContactConfirmContainer> = (args) => {
  return <ContactConfirmContainer {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  formValues: {
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    company: undefined,
    email: '',
    postalcode: undefined,
    address: undefined,
    phone: undefined,
    service: undefined,
    title: '',
    content: '',
    agreement: undefined,
  },
};
