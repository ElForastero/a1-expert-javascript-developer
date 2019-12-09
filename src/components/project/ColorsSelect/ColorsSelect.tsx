import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ucFirst } from '@/libs/str';
import useSearchParams from '@/hooks/useSearchParams';
import { RootState } from '@/store';
import { fetchColors } from '@/store/colors';
import { SelectItem as ItemType } from '@/components/base/Select';
import { LabeledSelect } from '@/components/composite/LabeledSelect';

type Props = {
  onChange: (v: any) => void;
};

export const ColorsSelect: React.FC<Props> = ({ onChange }) => {
  const dispatch = useDispatch();
  const colors = useSelector((state: RootState) => state.colors.data);
  const { color } = useSearchParams();

  const noneColor: ItemType = { label: 'All car colors', value: undefined };
  const colorsValues = useMemo(
    () => [noneColor, ...colors.map(color => ({ label: ucFirst(color), value: color }))],
    [colors]
  );

  useEffect(() => {
    if (colors.length === 0) dispatch(fetchColors());
  }, []);

  return (
    <LabeledSelect
      label="Color"
      values={colorsValues}
      defaultValue={color}
      onChange={onChange}
      loading={colors.length === 0}
    />
  );
};
