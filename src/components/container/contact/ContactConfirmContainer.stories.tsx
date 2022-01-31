import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContactConfirmContainer from './ContactConfirmContainer';

export default {
  title: 'Container/ContactConfirmContainer',
  component: ContactConfirmContainer,
  argTypes: {},
} as ComponentMeta<typeof ContactConfirmContainer>;

const Template: ComponentStory<typeof ContactConfirmContainer> = (args) => {
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
