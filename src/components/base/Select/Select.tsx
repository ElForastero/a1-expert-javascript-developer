import React, { useState, useRef, useEffect } from 'react';
import c from 'classnames';
import useClickOutside from '@/hooks/useClickOutside';
import useKeyDown from '@/hooks/useKeyDown';
import { Spinner } from '@/components/base/Spinner';
import Item from './Item';
import s from './Select.module.css';

type SelectItem = {
  label: string;
  value: any;
};

export type Props = {
  id?: string;
  values: Array<SelectItem>;
  defaultValue?: any;
  onChange: (v: any) => void;
  loading?: boolean;
};

export const Select: React.FC<Props> = ({
  id,
  values,
  defaultValue,
  onChange,
  loading = false,
}) => {
  const ref = useRef<HTMLDivElement>(null!);
  const defaultUpdatedRef = useRef(false);
  const [selected, select] = useState<SelectItem>(values[0]);
  const [active, toggle] = useState(false);
  useClickOutside(ref, () => toggle(false));
  useKeyDown('escape', () => toggle(false));

  /* Set default value */
  useEffect(() => {
    if (defaultUpdatedRef.current) return;

    const defaultSelected = values.find(({ value }) => value === defaultValue);
    if (defaultSelected !== undefined) {
      select(defaultSelected);
      onChange(defaultSelected.value);
      defaultUpdatedRef.current = true;
    }
  }, [defaultValue, values, defaultUpdatedRef.current]);

  const handleSelect = (item: SelectItem) => {
    toggle(false);

    /* Ignore selecting an already selected value */
    if (item.value !== selected.value) {
      select(item);
      onChange(item.value);
    }
  };

  const open = () => {
    if (!loading) toggle(!active);
  };

  return (
    <div id={id} className={c(s.container, { [s.active]: active })} onClick={open} ref={ref}>
      <div className={s.selected}>
        {selected.label}
        {loading ? <Spinner size="sm" /> : <div className={s.triangle} />}
      </div>
      {active && (
        <div className={s.list}>
          {values.map(item => (
            <Item
              key={item.value}
              selected={item === selected}
              onClick={handleSelect.bind(null, item)}
            >
              {item.label}
            </Item>
          ))}
        </div>
      )}
    </div>
  );
};
