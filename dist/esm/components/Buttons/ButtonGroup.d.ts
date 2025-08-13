import React, { ReactElement, KeyboardEventHandler } from 'react';
import { CSSObject } from '@emotion/react';
type ButtonGroupProps = {
    children: ReactElement | ReactElement[];
    className?: {
        buttonGroup?: CSSObject;
    };
    direction?: 'horizontal' | 'vertical';
    gap?: 'small' | 'medium' | 'large';
    dataTestId?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
    role?: 'group' | 'toolbar' | 'radiogroup';
    onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
export {};
