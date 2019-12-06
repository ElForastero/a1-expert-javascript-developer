import React from 'react';
import c from 'classnames';
import { title, bold } from './Typography.module.css';

type Props = {
  bold?: boolean;
};

const Title: React.FC<Props> = ({ children, bold: isBold = false }) => (
  <div className={c(title, { [bold]: isBold })}>{children}</div>
);

export default Title;
