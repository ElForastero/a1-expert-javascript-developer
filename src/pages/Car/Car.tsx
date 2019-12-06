import React from 'react';
import CommonLayout from '@/layouts/Common';
import { Content } from '@/components/base/Layout';
import Box from '@/components/base/Box';
import { Gallery } from '@/components/project/Gallery';
import { Header, Title, Paragraph } from '@/components/base/Typography';
import { FavoritesControl } from '@/components/project/FavoritesControl';

const Car: React.FC = () => (
  <CommonLayout>
    <Gallery />
    <Content withTopPadding>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="flex-start"
        width="750px"
        maxWidth="100%"
        mx="auto"
      >
        <Box mr={3}>
          <Header bold>Chrysler Crossfire</Header>
          <Title>Stock # 16040 - 152.2 KM - Petrol - Yellow</Title>
          <Paragraph>
            This car is currently available and can be delivered as soon as tomorrow morning. Please
            be aware that delivery times shown in this page are not definitive and may change due to
            bad weather conditions.
          </Paragraph>
        </Box>
        <Box minWidth="300px">
          <FavoritesControl />
        </Box>
      </Box>
    </Content>
  </CommonLayout>
);

export default Car;
