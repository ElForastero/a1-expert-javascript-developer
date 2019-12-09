import React from 'react';
import c from 'classnames';
import { LinkProps, Link as BaseLink } from 'react-router-dom';
import { link, disabled } from './Link.module.css';

type Props = LinkProps & {
  disabled?: boolean;
};

export const Link: React.FC<Props> = ({ children, disabled: isDisabled, ...props }) => {
  if (isDisabled) {
    return <span className={c(link, disabled)}>{children}</span>;
  }

  return (
    <BaseLink className={link} {...props}>
      {children}
    </BaseLink>
  );
};

Link.defaultProps = {
  disabled: false,
};
