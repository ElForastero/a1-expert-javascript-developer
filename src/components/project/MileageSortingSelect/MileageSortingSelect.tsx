import React from 'react';
import { useHistory } from 'react-router-dom';
import route from '@/libs/route';
import useSearchParams from '@/hooks/useSearchParams';
import { LabeledSelect } from '@/components/composite/LabeledSelect';

export const MileageSortingSelect: React.FC = () => {
  const searchParams = useSearchParams();
  const history = useHistory();

  const values = [
    { label: 'None', value: null },
    { label: 'Mileage - Ascending', value: 'asc' },
    { label: 'Mileage - Descending', value: 'desc' },
  ];

  const sortItems = (value: string | null) => {
    history.replace(route('catalog', { page: 1 }, { ...searchParams, sort: value }));
  };

  return (
    <LabeledSelect
      label="Sort by"
      values={values}
      defaultValue={searchParams.sort}
      onChange={sortItems}
    />
  );
};
