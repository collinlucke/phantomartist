import React, { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';
interface ButtonGroupProps {
    children: ReactElement | ReactElement[];
    className?: {
        buttonGroup?: CSSObject;
    };
    direction?: 'horizontal' | 'vertical';
    gap?: 'small' | 'medium' | 'large';
    dataTestId?: string;
}
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
export {};
