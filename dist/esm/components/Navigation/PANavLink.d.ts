import { StyleXStyles } from '@stylexjs/stylex';
import { ReactElement } from 'react';
type PANavLink = {
    to: string;
    children: ReactElement | string;
    style?: 'primaryButton' | 'secondaryButton' | 'tertiaryButton';
    className?: {
        paNavLink?: StyleXStyles;
    };
};
export declare const PANavLink: React.FC<PANavLink>;
export {};
