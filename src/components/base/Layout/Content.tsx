import React from 'react';
import c from 'classnames';
import { content, withTopPadding } from './Content.module.css';

type Props = {
  withTopPadding?: boolean;
};

const Content: React.FC<Props> = ({ children, withTopPadding: p }) => (
  <div className={c(content, { [withTopPadding]: p })}>{children}</div>
);

Content.defaultProps = {
  withTopPadding: false,
};

export default Content;
