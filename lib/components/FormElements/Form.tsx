import React, { FormEventHandler, ReactNode } from 'react';
import { colors } from '../../styling/globalStyles';
import { CSSObject } from '@emotion/react';

type FormProps = {
  children?: ReactNode;
  onSubmit?: FormEventHandler;
  className?: {
    formWrapper?: CSSObject;
  };
};

export const Form = ({ children, onSubmit, className }: FormProps) => {
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form
      css={[baseStyles.formWrapper, className?.formWrapper]}
      onSubmit={handleOnSubmit}
    >
      {children}
    </form>
  );
};

const baseStyles = {
  formWrapper: {
    backgroundColor: `color-mix(in srgb, ${colors.primary} 75%, white)`,
    borderRadius: '6px',
    padding: '20px',
    width: '100%'
  }
};
