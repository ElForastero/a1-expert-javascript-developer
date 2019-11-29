import React from 'react';

type Props = {
  children: React.ElementType;
};

export const Button: React.FC<Props> = ({ children }) => <button>{children}</button>;
