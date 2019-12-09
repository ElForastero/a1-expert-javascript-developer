import React from 'react';
import route from '@/libs/route';
import { ucFirst } from '@/libs/str';
import { Car } from '@/types/Car';
import { Box } from '@/components/base/Box';
import { Link } from '@/components/base/Link';
import Cover from './Components/Cover';
import s from './CatalogItem.module.css';

export const CatalogItem: React.FC<Car> = ({
  manufacturerName,
  modelName,
  stockNumber,
  mileage,
  fuelType,
  color,
  pictureUrl,
}) => (
  <Box as="article" display="flex" className={s.container}>
    <Cover src={pictureUrl} />
    <Box display="flex" flexDirection="column">
      <div className={s.title}>{`${manufacturerName} ${modelName}`}</div>
      <div className={s.info}>{`Stock # ${stockNumber} - ${mileage.number} ${
        mileage.unit
      } - ${fuelType} - ${ucFirst(color)}`}</div>
      <div className={s.action}>
        <Link to={route('car', { id: stockNumber })}>View details</Link>
      </div>
    </Box>
  </Box>
);
