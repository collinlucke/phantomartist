import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type FormTextAreaProps = {
    label?: string | ReactNode;
    name?: string;
    type?: HTMLInputElement;
    labelPos?: 'left' | 'right' | 'above' | 'below';
    value?: string;
    readonly?: boolean;
    autoResize?: boolean;
    className?: {
        textArea: CSSObject;
        textAreaWrapper: CSSObject;
        label: CSSObject;
        above: CSSObject;
        below: CSSObject;
        left: CSSObject;
        right: CSSObject;
    };
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export declare const FormTextArea: React.FC<FormTextAreaProps>;
export {};
