import React from 'react';
import { CSSObject } from '@emotion/react';
export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    maxWidth?: string;
    showCloseButton?: boolean;
    dataTestId?: string;
    className?: {
        backdrop?: CSSObject;
        modal?: CSSObject;
        header?: CSSObject;
        title?: CSSObject;
        content?: CSSObject;
    };
    closeOnBackdropClick?: boolean;
    closeOnEscape?: boolean;
    trapFocus?: boolean;
    initialFocusRef?: React.RefObject<HTMLElement>;
    finalFocusRef?: React.RefObject<HTMLElement>;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaDescribedBy?: string;
};
export declare const Modal: React.FC<ModalProps>;
//# sourceMappingURL=Modal.d.ts.map