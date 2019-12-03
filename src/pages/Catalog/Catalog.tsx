import React from 'react';
import CommonLayout from '@/layouts/Common';
import Button from '@/components/base/Button';
import CatalogItem from '@/components/project/CatalogItem/CatalogItem';

const Catalog: React.FC = () => (
  <CommonLayout>
    <Button>Save</Button>
    <CatalogItem
      color={'red'}
      fuelType={'Diesel'}
      manufacturerName={'Audi'}
      mileage={{ number: 133000.7, unit: 'km' }}
      modelName={'A3'}
      pictureUrl={undefined}
      stockNumber={353535}
    />
  </CommonLayout>
);

export default Catalog;
