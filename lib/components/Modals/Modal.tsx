import { FC, MouseEvent, ReactNode, useState } from 'react';
import { baseTheme } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';
import { CancelCircleIcon } from 'hugeicons-react';

type ModalTypes = {
  children: ReactNode;
  dataTestId?: string;
  className?: {
    modal?: CSSObject;
  };

  closeModal?: () => void;
};

export const Modal: FC<ModalTypes> = ({
  className = {},
  children,
  dataTestId,
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
    <div
      css={[baseTheme.modal, className?.modal]}
      className="pa-modal"
      data-testid={dataTestId}
    >
      <div css={baseTheme.modalContentWrapper}>
        <div css={baseTheme.modalHeading} className="pa-modal-heading">
          {closeModal && (
            <CancelCircleIcon
              size={24}
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
