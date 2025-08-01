import React from 'react';
import { CSSObject } from '@emotion/react';
import { CancelCircleIcon } from 'hugeicons-react';
import { baseColors } from '../../styling/baseTheme';
import { Button } from '../Buttons/Button';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: string;
  showCloseButton?: boolean;
  dataTestId?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = '400px',
  showCloseButton = true,
  dataTestId
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      css={localStyles.backdrop}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      <div
        css={[localStyles.modal, { maxWidth }]}
        role="dialog"
        aria-modal="true"
        data-testid={dataTestId}
      >
        {(title || showCloseButton) && (
          <div css={localStyles.header}>
            {title && <h1 css={localStyles.title}>{title}</h1>}
            {showCloseButton && (
              <Button
                className={{ button: localStyles.closeButton }}
                onClick={onClose}
                ariaLabel="Close modal"
                kind="ghost"
                size="medium"
                iconOnly
                icon={<CancelCircleIcon size={24} />}
              />
            )}
          </div>
        )}
        <div css={localStyles.content}>{children}</div>
      </div>
    </div>
  );
};

const localStyles: { [key: string]: CSSObject } = {
  backdrop: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '1rem'
  },
  modal: {
    position: 'relative' as const,
    backgroundColor: '#EEDECC',
    borderRadius: '3px',
    boxShadow:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem 1.5rem 0 1.5rem'
  },
  title: {
    color: baseColors.primary[500],
    marginTop: '5px',
    fontSize: '33px'
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '12px'
  },
  content: {
    padding: '1.5rem',
    overflow: 'auto',
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  }
};
