import React, { useEffect } from 'react';
import CommonLayout from '@/layouts/Common';
import { Content } from '@/components/base/Layout';
import Box from '@/components/base/Box';
import { Gallery } from '@/components/project/Gallery';
import { Header, Title, Paragraph } from '@/components/base/Typography';
import { FavoritesControl } from '@/components/project/FavoritesControl';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCar } from '@/store/car';
import { RootState } from '@/store';
import { ucFirst } from '@/libs/str';
import Tombstone from '@/components/base/Tombstone';

const Car: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.car);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCar(parseInt(id!, 10)));
  }, [id]);

  return (
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
            <Header bold>
              {loading && <Tombstone line />}
              {!loading && `${data!.manufacturerName} ${data!.modelName}`}
            </Header>
            <Title>
              {loading && <Tombstone line />}
              {!loading &&
                `Stock # ${data!.stockNumber} - ${data!.mileage.number} ${data!.mileage.unit} - ${
                  data!.fuelType
                } - ${ucFirst(data!.color)}`}
            </Title>
            <Paragraph>
              This car is currently available and can be delivered as soon as tomorrow morning.
              Please be aware that delivery times shown in this page are not definitive and may
              change due to bad weather conditions.
            </Paragraph>
          </Box>
          <Box minWidth="300px">
            <FavoritesControl />
          </Box>
        </Box>
      </Content>
    </CommonLayout>
  );
};

export default Car;
