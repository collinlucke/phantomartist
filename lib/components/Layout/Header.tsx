import * as stylex from '@stylexjs/stylex';

export const Header = ({ children }) => {
  // TODO: Make a recursive function to find certain element types to pass styles to

  return <header {...stylex.props(baseStyles.header)}>{children}</header>;
};
const baseStyles = stylex.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid green'
  }
});
