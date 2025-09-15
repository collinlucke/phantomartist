import { MouseEventHandler, ReactElement, KeyboardEventHandler } from 'react';
import { CSSObject } from '@emotion/react';
type ButtonProps = {
    children?: ReactElement | string;
    className?: {
        button?: CSSObject;
    };
    type?: HTMLButtonElement['type'];
    kind?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'ghostOnDark' | 'outline';
    size?: 'small' | 'medium' | 'large';
    iconOnly?: boolean;
    icon?: ReactElement | string;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    ariaExpanded?: boolean;
    ariaHaspopup?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    ariaPressed?: boolean;
    role?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    tabIndex?: number;
    testId?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
};
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=Button.d.ts.map