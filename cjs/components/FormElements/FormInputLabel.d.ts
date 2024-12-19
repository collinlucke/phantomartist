import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type Props = {
    position: 'left' | 'right' | 'above' | 'below';
    name: string;
    label?: string | ReactNode;
    className?: {
        label?: CSSObject;
        above?: CSSObject;
        below?: CSSObject;
        left?: CSSObject;
        right?: CSSObject;
    };
};
export declare const FormInputLabel: React.FC<Props>;
export {};
