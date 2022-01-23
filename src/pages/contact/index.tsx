import { ReactElement, useState } from 'react';

import Head from 'next/head';
import Layout from '@/components/layouts/Layout';
import ContactInputContainer from '@/components/container/contact/ContactInputContainer';
import ContactConfirmContainer from '@/components/container/contact/ContactConfirmContainer';
import ContactCompleteContainer from '@/components/container/contact/ContactCompleteContainer';

export type FormValues = {
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  company: string | undefined;
  email: string;
  postalcode: string | undefined;
  address: string | undefined;
  phone: string | undefined;
  service: string | undefined;
  title: string;
  content: string;
  agreement: boolean | undefined;
};

export type FormState = 'input' | 'confirm' | 'complete';

const ContactIndex = () => {
  const [formValues, setFormValues] = useState<FormValues>({
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
  });
  const [formState, setFormState] = useState<FormState>('input');

  const handleBack = () => {
    setFormState('input');
  };

  const handleConfirm = (values: FormValues) => {
    setFormValues(values);
    setFormState('confirm');
  };

  const handleSubmit = () => {
    setFormState('complete');
  };

  return (
    <>
      <Head>
        <title>contact | contact form app</title>
      </Head>
      {formState === 'input' && <ContactInputContainer formValues={formValues} onConfirm={handleConfirm} />}
      {formState === 'confirm' && (
        <ContactConfirmContainer formValues={formValues} onBack={handleBack} onSubmit={handleSubmit} />
      )}
      {formState === 'complete' && <ContactCompleteContainer />}
    </>
  );
};

ContactIndex.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactIndex;
