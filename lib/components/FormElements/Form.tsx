import React, { FormEventHandler, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { colors } from '../../styling/tokens.stylex';

type FormProps = {
  children?: ReactNode;
  onSubmit?: FormEventHandler;
  className?: StyleXStyles;
};

export const Form = ({ children, onSubmit, className }: FormProps) => {
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form
      {...stylex.props(baseStyles.formWrapper, className)}
      onSubmit={handleOnSubmit}
    >
      {children}
    </form>
  );
};

const baseStyles = stylex.create({
  formWrapper: {
    background: colors.primary,
    borderRadius: '6px',
    padding: '20px'
  }
});
