import { FC, ReactElement } from 'react';
import type { StyleXStyles } from '@stylexjs/stylex';
type HeaderMain = {
    children?: ReactElement;
    homeLinkContent?: ReactElement;
    rightContent?: ReactElement;
    className?: {
        header: StyleXStyles;
        paNavLink: StyleXStyles;
    };
};
export declare const HeaderMain: FC<HeaderMain>;
export {};
