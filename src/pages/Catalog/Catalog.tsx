import React from 'react';
import CommonLayout from '@/layouts/Common';
import { Content } from '@/components/base/Layout';
import { Box } from '@/components/base/Box';
import { CatalogFilters } from '@/components/project/CatalogFilters';
import { Catalog as List } from '@/components/project/Catalog';
import { Sticky } from '@/components/base/Sticky';

const Catalog: React.FC = () => (
  <CommonLayout>
    <Content withTopPadding>
      <Box display="flex" flexDirection="row" flexWrap="nowrap" alignItems="flex-start">
        <Sticky top="104px" data-testid="sticky-filters">
          <CatalogFilters />
        </Sticky>
        <List />
      </Box>
    </Content>
  </CommonLayout>
);

export default Catalog;
