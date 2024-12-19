import { MouseEventHandler, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
interface ButtonProps {
    children: ReactElement | string;
    className?: {
        button?: CSSObject;
    };
    type?: HTMLButtonElement['type'];
    kind?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    iconOnly?: boolean;
    icon?: ReactElement | string;
    dataTestId?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
/** How do buh-tun? */
export declare const Button: React.FC<ButtonProps>;
export {};
