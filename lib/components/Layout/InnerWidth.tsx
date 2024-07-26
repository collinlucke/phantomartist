import * as stylex from '@stylexjs/stylex';

export const InnerWidth = ({ children, className }) => {
  return <div {...stylex.props(baseStyles.base, className)}>{children}</div>;
};

// const width = screenWidths.xlg;

const baseStyles = stylex.create({
  base: {
    alignSelf: 'start',
    border: '1px solid blue',
    width: {
      default: 'calc(100% - 20px)',
      '@media  (min-width: 320px)': 'calc(100% - 20px)',
      '@media (min-width: 420px)': 'calc(100% - 40px)',
      '@media  (min-width: 780px)': '720px',
      '@media  (min-width: 1024px)': '900px',
      '@media  (min-width: 1200px)': '1024px'
    }
  }
});
