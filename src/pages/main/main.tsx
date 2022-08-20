import React from 'react';
import { AboutMe, Preview } from '../../components';
import Layout from '../../layout/layout';

function Main(): JSX.Element {
  return (
    <Layout>
      <Preview />
      <AboutMe />
    </Layout>
  );
}

export default Main;
