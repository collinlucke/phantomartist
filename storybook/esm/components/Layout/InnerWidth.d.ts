import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type InnerWidthSize = 'small' | 'medium' | 'large' | 'full';
type InnerWidthProps = {
    children?: ReactNode;
    size?: InnerWidthSize;
    className?: {
        innerWidth: CSSObject;
    };
};
export declare const InnerWidth: React.FC<InnerWidthProps>;
export {};
