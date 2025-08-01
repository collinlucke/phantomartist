import React from 'react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    maxWidth?: string;
    showCloseButton?: boolean;
    dataTestId?: string;
}
export declare const Modal: React.FC<ModalProps>;
