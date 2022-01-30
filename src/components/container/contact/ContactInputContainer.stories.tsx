import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { screen, userEvent } from '@storybook/testing-library';

import ContactInputContainer from './ContactInputContainer';

export default {
  title: 'Container/ContactInputContainer',
  component: ContactInputContainer,
  argTypes: {},
} as ComponentMeta<typeof ContactInputContainer>;

const defaultFormValuesMock = {
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
};

const Template: ComponentStory<typeof ContactInputContainer> = (args) => {
  return <ContactInputContainer {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};

export const Filled = Template.bind({});
Filled.args = {
  formValues: defaultFormValuesMock,
};

export const FilledPlayForm = Template.bind({});
FilledPlayForm.play = async () => {
  const firstNameInput = screen.getByLabelText('姓', {
    selector: 'input',
  });
  await userEvent.type(firstNameInput, defaultFormValuesMock.firstName, {
    delay: 100,
  });

  const lastNameInput = screen.getByLabelText('名', {
    selector: 'input',
  });
  await userEvent.type(lastNameInput, defaultFormValuesMock.lastName, {
    delay: 100,
  });

  const firstNameKanaInput = screen.getByLabelText('せい', {
    selector: 'input',
  });
  await userEvent.type(firstNameKanaInput, defaultFormValuesMock.firstNameKana, {
    delay: 100,
  });

  const lastNameKanaInput = screen.getByLabelText('めい', {
    selector: 'input',
  });
  await userEvent.type(lastNameKanaInput, defaultFormValuesMock.lastNameKana, {
    delay: 100,
  });

  const companyInput = screen.getByLabelText('社名', {
    selector: 'input',
  });
  await userEvent.type(companyInput, defaultFormValuesMock.company, {
    delay: 100,
  });

  const emailInput = screen.getByLabelText('メールアドレス', {
    selector: 'input',
  });
  await userEvent.type(emailInput, defaultFormValuesMock.email, {
    delay: 100,
  });

  const postalcodeInput = screen.getByLabelText('郵便番号', {
    selector: 'input',
  });
  await userEvent.type(postalcodeInput, defaultFormValuesMock.postalcode, {
    delay: 100,
  });

  const addressInput = screen.getByLabelText('住所', {
    selector: 'input',
  });
  await userEvent.type(addressInput, defaultFormValuesMock.address, {
    delay: 100,
  });

  const phoneInput = screen.getByLabelText('電話番号', {
    selector: 'input',
  });
  await userEvent.type(phoneInput, defaultFormValuesMock.phone, {
    delay: 100,
  });

  const serviceInput = screen.getByLabelText('どの製品について', {
    selector: 'select',
  });
  userEvent.selectOptions(serviceInput, defaultFormValuesMock.service);

  const titleInput = screen.getByLabelText('お問い合わせ件名', {
    selector: 'input',
  });
  await userEvent.type(titleInput, defaultFormValuesMock.title, {
    delay: 100,
  });

  const contentInput = screen.getByLabelText('お問い合わせ内容', {
    selector: 'textarea',
  });
  await userEvent.type(contentInput, defaultFormValuesMock.content, {
    delay: 100,
  });

  const agreementInput = screen.getByLabelText('個人情報の保持に同意する', {
    selector: 'input',
  });
  userEvent.click(agreementInput);

  const submitButton = screen.getByRole('submit');
  userEvent.click(submitButton);
};
