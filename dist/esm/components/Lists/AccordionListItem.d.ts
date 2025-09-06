import React from 'react';
import { CSSObject } from '@emotion/react';
type AccordionListItemProps = {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
    disabled?: boolean;
    className?: {
        item?: CSSObject;
        header?: CSSObject;
        content?: CSSObject;
        icon?: CSSObject;
    };
    ariaLabel?: string;
    dataTestId?: string;
    useAnimation?: boolean;
};
export declare const AccordionListItem: React.FC<AccordionListItemProps>;
export {};
