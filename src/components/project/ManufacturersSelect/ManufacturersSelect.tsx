import React, { useEffect, useMemo } from 'react';
import { RootState } from '@/store';
import { SelectItem as ItemType } from '@/components/base/Select';
import { LabeledSelect } from '@/components/composite/LabeledSelect';
import { fetchManufacturers } from '@/store/manufacturers';
import { useDispatch, useSelector } from 'react-redux';
import useSearchParams from '@/hooks/useSearchParams';

type Props = {
  onChange: (v: any) => void;
};

export const ManufacturersSelect: React.FC<Props> = ({ onChange }) => {
  const dispatch = useDispatch();
  const manufacturers = useSelector((state: RootState) => state.manufacturers.data);
  const { manufacturer } = useSearchParams();

  const noneValue: ItemType = { label: 'All manufacturers', value: undefined };
  const manufacturersValues = useMemo(
    () => [noneValue, ...manufacturers.map(({ name }) => ({ label: name, value: name }))],
    [manufacturers]
  );

  useEffect(() => {
    if (manufacturers.length === 0) dispatch(fetchManufacturers());
  }, []);

  return (
    <LabeledSelect
      label="Manufacturer"
      values={manufacturersValues}
      defaultValue={manufacturer}
      onChange={onChange}
      loading={manufacturers.length === 0}
    />
  );
};
