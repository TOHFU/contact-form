import { ReactElement, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Layout from '@/components/layouts/Layout';
import ContactInputContainer from '@/components/container/contact/ContactInputContainer';
import ContactConfirmContainer from '@/components/container/contact/ContactConfirmContainer';
import ContactCompleteContainer from '@/components/container/contact/ContactCompleteContainer';

import styles from './index.module.scss';

/**
 * お問い合わせフォームの送信値
 */
export interface ContactFormValues {
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  company?: string;
  email: string;
  postalcode?: string;
  address?: string;
  phone?: string;
  service?: string;
  title: string;
  content: string;
  agreement?: boolean;
  recaptchaToken?: string;
}

/**
 * フォームの状態
 */
export type ContactFormState = 'input' | 'confirm' | 'complete';

const INITIAL_FORM_VALUES: ContactFormValues = {
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
  recaptchaToken: undefined,
};

/**
 * お問い合わせページコンポーネント
 */
const ContactPage = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState<ContactFormValues>(INITIAL_FORM_VALUES);
  const [formState, setFormState] = useState<ContactFormState>('input');

  const handleBack = useCallback(() => {
    setFormState('input');
  }, []);

  const handleConfirm = useCallback((values: ContactFormValues) => {
    setFormValues(values);
    setFormState('confirm');
  }, []);

  const handleSubmit = useCallback(() => {
    setFormState('complete');
  }, []);

  const handleComplete = useCallback(() => {
    router.push('/').catch((error) => {
      console.error('Failed to navigate:', error);
    });
  }, [router]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [formState]);

  return (
    <>
      <Head>
        <title>お問い合わせ | contact form app</title>
        <meta name="description" content="お問い合わせフォーム" />
      </Head>
      <div className={styles.Container}>
        <h1>お問い合わせ</h1>
        {formState === 'input' && (
          <ContactInputContainer formValues={formValues} onConfirm={handleConfirm} />
        )}
        {formState === 'confirm' && (
          <ContactConfirmContainer
            formValues={formValues}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        )}
        {formState === 'complete' && <ContactCompleteContainer onBack={handleComplete} />}
      </div>
    </>
  );
};

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactPage;
