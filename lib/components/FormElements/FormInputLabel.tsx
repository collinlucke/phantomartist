import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';

type Props = {
  position: 'left' | 'right' | 'above' | 'below';
  name: string;
  label: string | ReactNode;
  className?: {
    label?: StyleXStyles;
    above?: StyleXStyles;
    below?: StyleXStyles;
    left?: StyleXStyles;
    right?: StyleXStyles;
  };
};

export const FormInputLabel: React.FC<Props> = ({
  position,
  name,
  label,
  className
}) => {
  switch (position) {
    case 'left':
      return (
        <label
          {...stylex.props(
            baseStyles.label,
            baseStyles.left,
            className && className.label,
            className && className.left
          )}
          htmlFor={name}
        >
          {label}
        </label>
      );
    case 'right':
      return (
        <label
          htmlFor={name}
          {...stylex.props(
            baseStyles.label,
            baseStyles.right,
            className && className.label,
            className && className.right
          )}
        >
          {label}
        </label>
      );
    case 'above':
      return (
        <label
          {...stylex.props(
            baseStyles.label,
            baseStyles.above,
            className && className.label,
            className && className.above
          )}
          htmlFor={name}
        >
          {label}
        </label>
      );
    case 'below':
      return (
        <label
          htmlFor={name}
          {...stylex.props(
            baseStyles.label,
            baseStyles.below,
            className && className.label,
            className && className.below
          )}
        >
          {label}
        </label>
      );
  }
};

const baseStyles = stylex.create({
  label: {
    fontWeight: '500'
    // position: 'relative'
  },
  above: {
    marginBottom: '5px'
  },
  left: {
    alignSelf: 'end',
    marginRight: '10px'
  },
  right: {
    alignSelf: 'end',
    marginLeft: '10px'
  },
  below: { marginTop: '7px' }
});
