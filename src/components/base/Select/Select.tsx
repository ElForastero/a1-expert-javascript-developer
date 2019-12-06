import React, { useState, useRef } from 'react';
import c from 'classnames';
import useClickOutside from '@/hooks/useClickOutside';
import useKeyDown from '@/hooks/useKeyDown';
import Item from './Item';
import s from './Select.module.css';

type SelectItem = {
  label: string;
  value: any;
};

export type Props = {
  id?: string;
  values: Array<SelectItem>;
  onChange: (v: any) => void;
};

export const Select: React.FC<Props> = ({ id, values, onChange }) => {
  const ref = useRef<HTMLDivElement>(null!);
  const [selected, select] = useState<SelectItem>(values[0]);
  const [active, toggle] = useState(false);
  useClickOutside(ref, () => toggle(false));
  useKeyDown('escape', () => toggle(false));

  const handleSelect = (item: SelectItem) => {
    toggle(false);

    /* Ignore selecting an already selected value */
    if (item.value !== selected.value) {
      select(item);
      onChange(item.value);
    }
  };

  return (
    <div
      id={id}
      className={c(s.container, { [s.active]: active })}
      onClick={() => toggle(!active)}
      ref={ref}
    >
      {selected.label}

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
