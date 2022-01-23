import { ReactElement } from 'react';

import Head from 'next/head';
import Layout from '@/components/layouts/Layout';

import ContactInputContainer from '@/components/container/contact/ContactInputContainer';
import ContactConfirmContainer from '@/components/container/contact/ContactConfirmContainer';
const ContactIndex = () => {
  return (
    <>
      <Head>
        <title>contact | contact form app</title>
      </Head>
      <ContactInputContainer />
      <ContactConfirmContainer />
    </>
  );
};

ContactIndex.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactIndex;
