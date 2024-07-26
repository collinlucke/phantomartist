import * as stylex from '@stylexjs/stylex';
import { widths } from '../../styling/tokens.stylex';

export const Main = ({ children, className }) => {
  return <main {...stylex.props(baseStyles.page, className)}>{children}</main>;
};

const baseStyles = stylex.create({
  page: {
    border: '1px solid red'
  }
});
