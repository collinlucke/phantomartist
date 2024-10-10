import { FormEventHandler, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type FormProps = {
    children?: ReactNode;
    onSubmit?: FormEventHandler;
    className?: {
        formWrapper?: CSSObject;
    };
};
export declare const Form: ({ children, onSubmit, className }: FormProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
