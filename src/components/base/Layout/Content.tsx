import React from 'react';
import c from 'classnames';
import { content, withTopPadding } from './Content.module.css';

type Props = {
  withTopPadding?: boolean;
};

export const Content: React.FC<Props & React.HTMLProps<HTMLDivElement>> = ({
  children,
  withTopPadding: p,
  ...props
}) => (
  <div className={c(content, { [withTopPadding]: p })} {...props}>
    {children}
  </div>
);

Content.defaultProps = {
  withTopPadding: false,
};
