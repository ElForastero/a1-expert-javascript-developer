import React from 'react';
import { Content, Layout } from '@/components/base/Layout';
import Header from '@/components/composite/Header';
import Footer from '@/components/composite/Footer';

const Common: React.FC = ({ children }) => (
  <Layout>
    <Header />
    <Content withTopPadding>{children}</Content>
    <Footer />
  </Layout>
);

export default Common;