import React from 'react';
import CommonLayout from '@/layouts/Common';
import { Content } from '@/components/base/Layout';
import Box from '@/components/base/Box';
import Filters from '@/components/project/CatalogFilters';
import List from '@/components/project/Catalog';

const Catalog: React.FC = () => (
  <CommonLayout>
    <Content withTopPadding>
      <Box display="flex" flexDirection="row" flexWrap="nowrap" alignItems="flex-start">
        <Filters />
        <List />
      </Box>
    </Content>
  </CommonLayout>
);

export default Catalog;
