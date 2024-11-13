import { FC, MouseEvent, ReactNode, useState } from 'react';
import { baseTheme } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';
import { CancelCircleIcon } from 'hugeicons-react';

type ModalTypes = {
  children: ReactNode;
  className?: {
    modal?: CSSObject;
  };

  closeModal?: () => void;
};

export const Modal: FC<ModalTypes> = ({
  className = {},
  children,
  closeModal
}) => {
  const [hovering, setHovering] = useState(false);
  const closeModalHandler = () => {
    closeModal?.();
  };

  const mouseCloseHoverHandler = (e: MouseEvent) => {
    if (e.type === 'mouseenter') {
      setHovering(true);
    } else {
      setHovering(false);
    }
  };

  return (
    <div css={[baseTheme.modal, className?.modal]} className="pa-modal">
      <div css={baseTheme.modalContentWrapper}>
        <div css={baseTheme.modalHeading} className="pa-modal-heading">
          {closeModal && (
            <CancelCircleIcon
              fill={hovering ? 'rgba(125,125,125,.5)' : 'none'}
              onClick={closeModalHandler}
              onMouseEnter={mouseCloseHoverHandler}
              onMouseLeave={mouseCloseHoverHandler}
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
