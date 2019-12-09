import React, { useEffect } from 'react';
import CommonLayout from '@/layouts/Common';
import { Content } from '@/components/base/Layout';
import { Box } from '@/components/base/Box';
import { Gallery } from '@/components/project/Gallery';
import { Heading, Title, Paragraph } from '@/components/base/Typography';
import { FavoritesControl } from '@/components/project/FavoritesControl';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCar, updateError, updateLoading } from '@/store/car';
import { RootState } from '@/store';
import { ucFirst } from '@/libs/str';
import { Placeholder } from '@/components/base/Placeholder';
import { NotFoundException } from '@/exceptions/NotFoundException';

const Car: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.car);
  const { id } = useParams();

  /*
   * @todo Since we can't throw an exception from an async function
   *   would be better to hide this logic somewhere. Maybe in redux middleware.
   */
  if (error === 404) {
    dispatch(updateError(null));
    throw new NotFoundException();
  }

  useEffect(() => {
    /* @todo extend useParams to automatically cast types */
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
            <Heading bold>
              {loading && <Placeholder line />}
              {!loading && `${data!.manufacturerName} ${data!.modelName}`}
            </Heading>
            <Title>
              {loading && <Placeholder line />}
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
          <Box minWidth="300px">{!loading && <FavoritesControl id={data!.stockNumber} />}</Box>
        </Box>
      </Content>
    </CommonLayout>
  );
};

export default Car;
