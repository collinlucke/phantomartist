import * as stylex from '@stylexjs/stylex';

export const Block = ({ children, className }) => {
  return <div {...stylex.props(baseStyles.block, className)}>{children}</div>;
};

const baseStyles = stylex.create({
  block: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
});
