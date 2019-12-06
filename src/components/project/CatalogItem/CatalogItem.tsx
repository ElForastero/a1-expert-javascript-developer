import React from 'react';
import Cover from './Components/Cover';
import Box from '@/components/base/Box';
import { Link } from '@/components/base/Link';
import { Car } from '@/types/Car';
import Tombstone from '@/components/base/Tombstone';
import route from '@/libs/route';
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
        <Link to={route('car', { identifier: stockNumber })}>View details</Link>
      </div>
    </Box>
  </Box>
);

const CatalogItemTombstone: React.FC = () => (
  <Box as="article" display="flex" className={s.container}>
    <Box mr={3}>
      <Tombstone width="86px" height="67px" />
    </Box>
    <Box flexGrow={1} display="flex" flexDirection="column">
      <div className={s.title}>
        <Tombstone line />
      </div>
      <div className={s.info}>
        <Tombstone line />
      </div>
      <div className={s.action}>
        <Tombstone line />
      </div>
    </Box>
  </Box>
);

export default CatalogItem;

export { CatalogItemTombstone };
