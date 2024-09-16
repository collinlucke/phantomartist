import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';

type Props = {
  position: 'left' | 'right' | 'above' | 'below';
  name: string;
  label: string | ReactNode;
};

export const FormInputLabel: React.FC<Props> = ({ position, name, label }) => {
  switch (position) {
    case 'left':
      return (
        <label {...stylex.props(baseStyles.label)} htmlFor={name}>
          {label}
        </label>
      );
    case 'right':
      return <label htmlFor={name}>{label}</label>;
    case 'above':
      return (
        <>
          <label
            {...stylex.props(baseStyles.label, baseStyles.above)}
            htmlFor={name}
          >
            {label}
          </label>
          <br />
        </>
      );
    case 'below':
      return (
        <>
          <br />
          <label htmlFor={name}>{label}</label>
        </>
      );
  }
};

const baseStyles = stylex.create({
  label: {
    fontWeight: '500',
    position: 'relative'
  },
  above: {
    marginBottom: '5px'
  }
});
