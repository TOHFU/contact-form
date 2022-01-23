import { ReactElement } from 'react';

import Head from 'next/head';
import Layout from '@/components/layouts/Layout';

const ContactIndex = () => {
  return (
    <>
      <Head>
        <title>contact | contact form app</title>
      </Head>
      <h1>contact page</h1>
    </>
  );
};

ContactIndex.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactIndex;
