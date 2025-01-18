import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
type HeaderModifyProps = {
    children: ReactElement;
    useInnerWidth?: boolean;
    dataTestId?: string;
    className?: {
        header?: CSSObject;
        useInnerWidth?: CSSObject;
        innerWidth?: CSSObject;
    };
};
export declare const Header: React.FC<HeaderModifyProps>;
export {};
