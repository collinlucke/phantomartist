import { FC, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
type ModalTypes = {
    children: ReactNode;
    className?: {
        modal?: CSSObject;
    };
    closeModal?: () => void;
};
export declare const Modal: FC<ModalTypes>;
export {};
