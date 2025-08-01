import { ReactElement, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type HeaderModifyProps = {
    children?: ReactElement[];
    logo?: ReactNode;
    navigation?: ReactNode;
    actions?: ReactNode;
    useInnerWidth?: boolean;
    dataTestId?: string;
    className?: {
        header?: CSSObject;
    };
    layout?: 'default' | 'centered' | 'spread';
};
export declare const Header: React.FC<HeaderModifyProps>;
export {};
