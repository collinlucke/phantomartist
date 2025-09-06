import React from 'react';
import { CSSObject } from '@emotion/react';
type AccordionItem = {
    id: string;
    title: string;
    content: React.ReactNode;
    disabled?: boolean;
    isOpen?: boolean;
};
type AccordionListProps = {
    items: AccordionItem[];
    allowMultiple?: boolean;
    defaultOpenItems?: string[];
    onItemToggle?: (itemId: string, isOpen: boolean) => void;
    className?: {
        list?: CSSObject;
        item?: CSSObject;
        header?: CSSObject;
        content?: CSSObject;
    };
    useAnimation?: boolean;
    ariaLabel?: string;
    dataTestId?: string;
};
export declare const AccordionList: React.FC<AccordionListProps>;
export {};
