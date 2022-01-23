import type { ReactElement } from 'react';

import Head from 'next/head';
import Layout from '@/components/layouts/Layout';

const Home = () => {
  return (
    <div>
      <Head>
        <title>home | contact form</title>
      </Head>
      <h1>index page</h1>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
