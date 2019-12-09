import React from 'react';

export const Copyright: React.FC<React.HTMLProps<HTMLDivElement>> = props => (
  <div {...props}>&copy; AUTO1 Group {new Date().getFullYear()}</div>
);
