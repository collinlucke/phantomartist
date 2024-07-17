import React, { FormEventHandler, ReactNode } from 'react';

type FormProps = {
  children?: ReactNode;
  onSubmit?: FormEventHandler;
};

export const Form = ({ children, onSubmit }: FormProps) => {
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return <form onSubmit={handleOnSubmit}>{children}</form>;
};
