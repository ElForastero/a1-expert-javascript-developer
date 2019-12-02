import React from 'react';
import { Layout, Content } from '@/components/base/Layout';
import Header from '@/components/composite/Header';

const Error404 = () => (
  <Layout>
    <Header />
    Not found :(
    <Content>test</Content>
  </Layout>
);

export default Error404;
