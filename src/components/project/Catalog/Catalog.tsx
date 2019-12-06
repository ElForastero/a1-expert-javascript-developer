import React from 'react';
import CatalogItem, { CatalogItemTombstone } from '@/components/project/CatalogItem/CatalogItem';
import Box from '@/components/base/Box';
import { LabeledSelect } from '@/components/composite/LabeledSelect';
import { Title } from '@/components/base/Typography';
import { Pagination } from '@/components/composite/Pagination';
import { list, container } from './Catalog.module.css';

const values = [
  { label: 'None', value: null },
  { label: 'Mileage - Ascending', value: 'ASC' },
  { label: 'Mileage - Descending', value: 'DESC' },
];

const Catalog: React.FC = () => {
  return (
    <div className={container}>
      <Box display="flex" mb={3} justifyContent="space-between">
        <Box width="100%">
          <Title bold>Available cars</Title>
          <Box mb={2} />
          <Title>Showing 10 of 100 results</Title>
        </Box>
        <Box width="250px">
          <LabeledSelect label="Sort by" values={values} onChange={console.log} />
        </Box>
      </Box>
      <div className={list}>
        <CatalogItem
          color={'red'}
          fuelType={'Diesel'}
          manufacturerName={'Audi'}
          mileage={{ number: 133000.7, unit: 'km' }}
          modelName={'A3'}
          pictureUrl={undefined}
          stockNumber={353535}
        />
        <CatalogItem
          color={'red'}
          fuelType={'Diesel'}
          manufacturerName={'Audi'}
          mileage={{ number: 133000.7, unit: 'km' }}
          modelName={'A3'}
          pictureUrl={undefined}
          stockNumber={353535}
        />
        <CatalogItem
          color={'red'}
          fuelType={'Diesel'}
          manufacturerName={'Audi'}
          mileage={{ number: 133000.7, unit: 'km' }}
          modelName={'A3'}
          pictureUrl={undefined}
          stockNumber={353535}
        />
        <CatalogItem
          color={'red'}
          fuelType={'Diesel'}
          manufacturerName={'Audi'}
          mileage={{ number: 133000.7, unit: 'km' }}
          modelName={'A3'}
          pictureUrl={undefined}
          stockNumber={353535}
        />
        <CatalogItem
          color={'red'}
          fuelType={'Diesel'}
          manufacturerName={'Audi'}
          mileage={{ number: 133000.7, unit: 'km' }}
          modelName={'A3'}
          pictureUrl={undefined}
          stockNumber={353535}
        />
        <CatalogItem
          color={'red'}
          fuelType={'Diesel'}
          manufacturerName={'Audi'}
          mileage={{ number: 133000.7, unit: 'km' }}
          modelName={'A3'}
          pictureUrl={undefined}
          stockNumber={353535}
        />
      </div>
      <Box mt={3}>
        <Pagination />
      </Box>
    </div>
  );
};

export default Catalog;
