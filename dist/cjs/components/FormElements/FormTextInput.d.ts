import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type FormTextInputProps = {
    label?: string | ReactNode;
    name?: string;
    type?: HTMLInputTypeAttribute;
    labelPos?: 'left' | 'right' | 'above' | 'below';
    value?: string | number;
    placeholder?: string;
    readonly?: boolean;
    size?: 'large' | 'medium' | 'small';
    className?: {
        input?: CSSObject;
        inputWrapper?: CSSObject;
        label?: CSSObject;
        above?: CSSObject;
        below?: CSSObject;
        left?: CSSObject;
        right?: CSSObject;
    };
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare const FormTextInput: React.FC<FormTextInputProps>;
export {};
