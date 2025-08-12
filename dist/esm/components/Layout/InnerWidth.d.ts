import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type InnerWidthSize = 'small' | 'medium' | 'large' | 'full';
type InnerWidthProps = {
    children?: ReactNode;
    size?: InnerWidthSize;
    className?: {
        innerWidth: CSSObject;
    };
    dataTestid?: string;
};
export declare const InnerWidth: React.FC<InnerWidthProps>;
export {};
