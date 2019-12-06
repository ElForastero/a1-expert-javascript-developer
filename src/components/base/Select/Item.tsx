import React from 'react';
import c from 'classnames';
import { item, selected } from './Item.module.css';

type Props = {
  selected: boolean;
  onClick: () => void;
};

const Item: React.FC<Props> = ({ children, selected: isSelected, ...props }) => (
  <div {...props} className={c(item, { [selected]: isSelected })}>
    {children}
  </div>
);

export default Item;
