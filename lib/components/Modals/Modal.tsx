import { FC, ReactNode } from 'react';
import { baseTheme } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type ModalTypes = {
  children: ReactNode;
  className?: {
    modal?: CSSObject;
  };
};
export const Modal: FC<ModalTypes> = ({ className = {}, children }) => {
  return (
    <div className="pa-modal">
      <div css={[baseTheme.modal, className?.modal]}>{children}</div>
    </div>
  );
};
