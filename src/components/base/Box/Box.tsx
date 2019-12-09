import React, { useMemo } from 'react';
import expandStyles, { Styles } from './expandStyles';

/* prettier-ignore */
export
type Props = {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
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
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  px?: string | number;
  mx?: string | number;
  w?: string;
  h?: string;

  dataTestId?: string;
};

export const Box: React.FC<Props & React.HTMLProps<HTMLElement>> = ({
  as = 'div',
  children,
  className,
  dataTestId,
  ...props
}) => {
  const Tag = as;
  const styles = useMemo(() => expandStyles(props as Styles), [props]);

  return (
    <Tag className={className} style={styles} data-testid={dataTestId}>
      {children}
    </Tag>
  );
};

Box.defaultProps = {
  display: 'block',
};
