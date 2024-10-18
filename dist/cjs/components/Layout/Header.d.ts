import { ReactElement } from 'react';
import { ModifyProps } from '../../sharedTypes/ModifyProps.types';
import { CSSObject } from '@emotion/react';
type HeaderModifyProps = ModifyProps & {
    children: ReactElement;
    useInnerWidth?: boolean;
    isHeading?: boolean;
    className?: {
        header?: CSSObject;
        useInnerWidth?: CSSObject;
        innerWidth?: CSSObject;
    };
};
export declare const Header: React.FC<HeaderModifyProps>;
export {};
