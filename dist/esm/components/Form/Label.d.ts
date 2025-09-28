import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type LabelProps = {
    label: string | ReactNode;
    required?: boolean;
    htmlFor?: string;
    className?: CSSObject;
    labelPosition?: 'above' | 'below' | 'left' | 'right';
    onDark?: boolean;
};
export declare const Label: ({ label, required, htmlFor, className, labelPosition, onDark }: LabelProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Label.d.ts.map