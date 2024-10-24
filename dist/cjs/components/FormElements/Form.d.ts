import { FormEventHandler, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type FormProps = {
    children?: ReactNode;
    onSubmit?: FormEventHandler;
    role?: string;
    className?: {
        form?: CSSObject;
    };
};
export declare const Form: ({ children, role, className, onSubmit }: FormProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
