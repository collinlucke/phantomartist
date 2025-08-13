import React, { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
export type InputFieldProps = {
    label?: string | ReactNode;
    name?: string;
    type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'textarea' | 'search' | 'number';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
    error?: string;
    disabled?: boolean;
    readonly?: boolean;
    id?: string;
    onDark?: boolean;
    helperText?: string | ReactNode;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    'data-testid'?: string;
    labelPosition?: 'left' | 'right' | 'above' | 'below';
    size?: 'large' | 'medium' | 'small';
    autoResize?: boolean;
    className?: {
        container?: CSSObject;
        input?: CSSObject;
        label?: CSSObject;
        error?: CSSObject;
    };
};
export declare const InputField: React.FC<InputFieldProps>;
