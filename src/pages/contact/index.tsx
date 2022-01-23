import { ReactElement } from 'react';

import Head from 'next/head';
import Layout from '@/components/layouts/Layout';

import ContactInputContainer from '@/components/container/contact/ContactInputContainer';
import ContactConfirmContainer from '@/components/container/contact/ContactConfirmContainer';
import ContactCompleteContainer from '@/components/container/contact/ContactCompleteContainer';

const ContactIndex = () => {
  return (
    <>
      <Head>
        <title>contact | contact form app</title>
      </Head>
      <ContactInputContainer />
      <ContactConfirmContainer />
      <ContactCompleteContainer />
    </>
  );
};

ContactIndex.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactIndex;
