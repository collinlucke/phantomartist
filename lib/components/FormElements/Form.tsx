import { FormEventHandler, ReactNode } from 'react';
import { baseColors, shadesAndTints } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type FormProps = {
  children?: ReactNode;
  onSubmit?: FormEventHandler;
  role?: string;
  className?: {
    form?: CSSObject;
  };
};

export const Form = ({ children, role, className, onSubmit }: FormProps) => {
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form
      css={[baseStyles.form, className?.form]}
      onSubmit={handleOnSubmit}
      role={role}
    >
      {children}
    </form>
  );
};

const baseStyles = {
  form: {
    backgroundColor: shadesAndTints.tertiaryLight,
    borderRadius: '6px',
    padding: '20px',
    width: '100%'
  }
};
