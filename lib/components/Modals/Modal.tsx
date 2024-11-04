import { FC, ReactNode, useEffect, useState } from 'react';
import { baseTheme } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';
import { XmarkCircle } from 'iconoir-react';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closeModalHandler = () => {
    closeModal?.();
  };
  return (
    <div
      css={[baseTheme.modal, className?.modal]}
      className="pa-modal"
      style={isVisible ? baseStyles.visible : baseStyles.hidden}
    >
      <div css={baseTheme.modalContentWrapper}>
        <div css={baseTheme.modalHeading} className="pa-modal-heading">
          {closeModal && (
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

const baseStyles = {
  visible: {
    opacity: '1',
    transition: 'opacity .333s'
  },
  hidden: {
    opacity: '0'
  }
};
