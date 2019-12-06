type Shortcuts = {
  [key: string]: string | Array<string>;
};

export type Styles = {
  [key: string]: string | number;
};

const shortcutsMap: Shortcuts = {
  pt: 'paddingTop',
  pr: 'paddingLeft',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  px: ['paddingLeft', 'paddingRight'],
  mx: ['marginLeft', 'marginRight'],
  w: 'width',
  h: 'height',
};

/**
 * Transform shortcut styles to fully qualified CSS property names.
 */
const expandStyles = (styles: Styles) =>
  Object.keys(styles).reduce((acc, key) => {
    const value = typeof styles[key] === 'number' ? `var(--space-${styles[key]})` : styles[key];
    const expanded = shortcutsMap[key] ?? key;

    if (Array.isArray(expanded)) {
      return expanded.reduce((acc, expandedKey) => ({ ...acc, [expandedKey]: value }), acc);
    }

    return { ...acc, [expanded]: value };
  }, {});

export default expandStyles;
