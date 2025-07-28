import React, { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
export interface InputFieldProps {
    label?: string | ReactNode;
    name?: string;
    type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'textarea' | 'search';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    required?: boolean;
    error?: string;
    disabled?: boolean;
    readonly?: boolean;
    id?: string;
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
}
export declare const InputField: React.FC<InputFieldProps>;
