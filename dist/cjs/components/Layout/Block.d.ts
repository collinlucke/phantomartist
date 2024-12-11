import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';
type BlockProps = {
    children?: ReactNode;
    className?: {
        block?: CSSObject;
    };
    dataTestId?: string;
};
export declare const Block: React.FC<BlockProps>;
export {};
