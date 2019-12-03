import React from 'react';
import Cover from './Components/Cover';
import Box from '@/components/base/Box';
import { Link } from '@/components/base/Link';
import { Car } from '@/types/Car';
import s from './CatalogItem.module.css';

const CatalogItem: React.FC<Car> = ({
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
      <div
        className={s.info}
      >{`Stock # ${stockNumber} - ${mileage.number} ${mileage.unit} - ${fuelType} - ${color}`}</div>
      <div className={s.action}>
        <Link to={`/car/${stockNumber}`}>View details</Link>
      </div>
    </Box>
  </Box>
);

export default CatalogItem;
