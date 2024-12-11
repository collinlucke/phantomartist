import { ReactElement } from 'react';
import { ModifyPropsTypes } from '../../CustomTypes.types';
import { CSSObject } from '@emotion/react';
type HeaderModifyProps = ModifyPropsTypes & {
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
