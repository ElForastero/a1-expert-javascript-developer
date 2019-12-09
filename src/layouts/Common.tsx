import React from 'react';
import { Layout } from '@/components/base/Layout';
import { Header } from '@/components/composite/Header';
import { Footer } from '@/components/composite/Footer';
import { Sticky } from '@/components/base/Sticky';

const Common: React.FC = ({ children }) => (
  <Layout>
    <Sticky top="0px" data-testid="sticky-header">
      <Header />
    </Sticky>
    {children}
    <Footer />
  </Layout>
);

export default Common;
