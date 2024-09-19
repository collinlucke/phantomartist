import React, { FormEventHandler, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { colors } from '../../styling/tokens.stylex';

type FormProps = {
  children?: ReactNode;
  onSubmit?: FormEventHandler;
  className?: {
    formWrapper?: StyleXStyles;
  };
};

export const Form = ({ children, onSubmit, className }: FormProps) => {
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form
      {...stylex.props(
        baseStyles.formWrapper,
        className && className.formWrapper
      )}
      onSubmit={handleOnSubmit}
    >
      {children}
    </form>
  );
};

const baseStyles = stylex.create({
  formWrapper: {
    backgroundColor: `color-mix(in srgb, ${colors.primary} 75%, white)`,
    borderRadius: '6px',
    padding: '20px'
  }
});
