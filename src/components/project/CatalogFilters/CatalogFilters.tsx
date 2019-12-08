import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useSearchParams from '@/hooks/useSearchParams';
import route from '@/libs/route';
import Button from '@/components/base/Button';
import Box from '@/components/base/Box';
import { Backplate } from '@/components/base/Backplate';
import { ManufacturersSelect } from '@/components/project/ManufacturersSelect';
import { ColorsSelect } from '@/components/project/ColorsSelect';

const CatalogFilters: React.FC = () => {
  const history = useHistory();
  const searchParams = useSearchParams();
  const [color, setColor] = useState(undefined);
  const [manufacturer, setManufacturer] = useState(undefined);

  const applyFilters = () => {
    // Reset pagination by setting the page to 1
    history.replace(route('catalog', { page: 1 }, { ...searchParams, manufacturer, color }));
  };

  return (
    <Box minWidth="300px" mr={3}>
      <Backplate>
        <ColorsSelect onChange={setColor} />
        <Box mb={1} />
        <ManufacturersSelect onChange={setManufacturer} />
        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button onClick={applyFilters}>Filter</Button>
        </Box>
      </Backplate>
    </Box>
  );
};

export default CatalogFilters;
