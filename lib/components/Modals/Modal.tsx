import { FC, ReactNode } from 'react';
import { baseTheme } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';
import { XmarkCircle } from 'iconoir-react';

type ModalTypes = {
  children: ReactNode;
  className?: {
    modal?: CSSObject;
  };

  close?: () => void;
};

export const Modal: FC<ModalTypes> = ({ className = {}, children, close }) => {
  const closeModalHandler = () => {
    close?.();
  };
  return (
    <div css={[baseTheme.modal, className?.modal]} className="pa-modal">
      <div css={baseTheme.modalContentWrapper}>
        <div css={baseTheme.modalHeading} className="pa-modal-heading">
          {close && (
            <XmarkCircle
              style={baseTheme.modalCloseButton}
              onClick={closeModalHandler}
            />
          )}
        </div>
        <div css={baseTheme.modalContent} className="pa-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};
