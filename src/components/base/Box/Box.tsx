import React from 'react';

/* prettier-ignore */
type Props = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  width?: string;
  height?: string;
  display?: 'inline' | 'block' | 'inline-block' | 'flex' | 'inline-flex';
  alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch' | 'initial' | 'inherit';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'initial' | 'inherit';
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'auto' | 'initial' | 'inherit';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial' | 'inherit';
  flexBasis?: 'none' | 'auto' | 'fill' | 'content' | 'fit-content' | 'min-content' | 'max-content';
  flexGrow?: number;
  flexShrink?: number;
  flexDirection?: 'column' | 'row';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit';
};

const Box: React.FC<Props> = ({ as = 'div', children, className, ...props }) => {
  const Tag = as;

  return (
    <Tag className={className} style={props}>
      {children}
    </Tag>
  );
};

Box.defaultProps = {
  display: 'block',
};

export default Box;
