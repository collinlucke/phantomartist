import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type InnerWidthProps = {
    children?: ReactNode;
    className?: {
        innerWidth: CSSObject;
    };
};
export declare const InnerWidth: React.FC<InnerWidthProps>;
export {};
