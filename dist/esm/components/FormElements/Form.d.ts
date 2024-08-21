import { FormEventHandler, ReactNode } from 'react';
type FormProps = {
    children?: ReactNode;
    onSubmit?: FormEventHandler;
};
export declare const Form: ({ children, onSubmit }: FormProps) => import("react/jsx-runtime").JSX.Element;
export {};
