import React from 'react';
import Button from '@/components/base/Button';
import { LabeledSelect } from '@/components/composite/LabeledSelect';
import Box from '@/components/base/Box';
import { Backplate } from '@/components/base/Backplate';
import { container } from './CatalogFilters.module.css';

const values = [
  { label: 'None', value: null },
  { label: 'Mileage - Ascending', value: 'ASC' },
  { label: 'Mileage - Descending', value: 'DESC' },
];

const CatalogFilters: React.FC = () => {
  return (
    <Box minWidth="300px" mr={3}>
      <Backplate>
        <LabeledSelect label="Color" values={values} onChange={console.log} />
        <Box mb={1} />
        <LabeledSelect label="Manufacturer" values={values} onChange={console.log} />
        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button>Filter</Button>
        </Box>
      </Backplate>
    </Box>
  );
};

export default CatalogFilters;
