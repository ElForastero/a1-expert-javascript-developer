import React from 'react';
import c from 'classnames';
import { header, bold } from './Typography.module.css';

type Props = {
  bold?: boolean;
};

const Header: React.FC<Props> = ({ children, bold: isBold = false }) => (
  <div className={c(header, { [bold]: isBold })}>{children}</div>
);

export default Header;
