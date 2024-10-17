import { ReactNode } from 'react';
import { ClassNames, CSSObject } from '@emotion/react';

type Props = {
  position: 'left' | 'right' | 'above' | 'below';
  name: string;
  label?: string | ReactNode;
  className?: {
    label?: CSSObject;
    above?: CSSObject;
    below?: CSSObject;
    left?: CSSObject;
    right?: CSSObject;
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
          css={[
            baseStyles.label,
            baseStyles.left,
            className?.label,
            className?.left
          ]}
          htmlFor={name}
        >
          {label}
        </label>
      );
    case 'right':
      return (
        <label
          htmlFor={name}
          css={[
            baseStyles.label,
            baseStyles.right,
            className && className.label,
            className && className.right
          ]}
        >
          {label}
        </label>
      );
    case 'above':
      return (
        <label
          css={[
            baseStyles.label,
            baseStyles.above,
            className && className.label,
            className && className.above
          ]}
          htmlFor={name}
        >
          {label}
        </label>
      );
    case 'below':
      return (
        <label
          htmlFor={name}
          css={[
            baseStyles.label,
            baseStyles.below,
            className && className.label,
            className && className.below
          ]}
        >
          {label}
        </label>
      );
  }
};

const baseStyles = {
  label: {
    fontWeight: '500'
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
};
