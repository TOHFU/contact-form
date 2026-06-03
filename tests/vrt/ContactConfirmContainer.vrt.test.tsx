import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ContactConfirmContainer from '@/components/container/contact/ContactConfirmContainer';

const mockFormValues = {
  firstName: 'テスト',
  lastName: '太郎',
  firstNameKana: 'てすと',
  lastNameKana: 'たろう',
  company: '株式会社テスト',
  email: 'test@example.com',
  postalcode: '1234567',
  address: '東京都渋谷区1-1-1',
  phone: '0312345678',
  service: 'serviceA',
  title: 'お問い合わせ件名',
  content: 'お問い合わせ内容の例です。',
  agreement: true,
  recaptchaToken: 'mock-token',
};

describe('ContactConfirmContainer', () => {
  it('should match the visual snapshot', () => {
    const { container } = render(
      <ContactConfirmContainer
        formValues={mockFormValues}
        onBack={() => undefined}
        onSubmit={() => undefined}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
