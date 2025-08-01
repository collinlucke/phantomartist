import { MouseEventHandler, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
interface ButtonProps {
    children?: ReactElement | string;
    className?: {
        button?: CSSObject;
    };
    type?: HTMLButtonElement['type'];
    kind?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'ghostOnDark';
    size?: 'small' | 'medium' | 'large';
    iconOnly?: boolean;
    icon?: ReactElement | string;
    dataTestId?: string;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
export declare const Button: React.FC<ButtonProps>;
export {};
