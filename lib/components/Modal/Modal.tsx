import React from 'react';
import { CSSObject } from '@emotion/react';
import { CancelCircleIcon } from 'hugeicons-react';

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
  maxWidth = '500px',
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
      css={styles.backdrop}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      <div
        css={[styles.modal, { maxWidth }]}
        role="dialog"
        aria-modal="true"
        data-testid={dataTestId}
      >
        {(title || showCloseButton) && (
          <div css={styles.header}>
            {title && <h1 css={styles.title}>{title}</h1>}
            {showCloseButton && (
              <button
                css={styles.closeButton}
                onClick={onClose}
                aria-label="Close modal"
              >
                <CancelCircleIcon size={44} />
              </button>
            )}
          </div>
        )}
        <div css={styles.content}>{children}</div>
      </div>
    </div>
  );
};

const styles = {
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
  } as CSSObject,

  modal: {
    backgroundColor: '#EEDECC',
    borderRadius: '3px',
    boxShadow:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const
  } as CSSObject,

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 1.5rem 0 1.5rem' // half the vertical padding
    // No border bottom
  } as CSSObject,

  title: {
    margin: 0,
    fontSize: '36px',
    fontWeight: 400, // regular
    lineHeight: 1.25,
    letterSpacing: '-0.025em'
  } as CSSObject,

  closeButton: {
    background: 'none',
    border: 'none',
    padding: '0.5rem',
    cursor: 'pointer',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6b7280',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#e5e7eb',
      color: '#374151'
    },
    '&:focus': {
      outline: '2px solid #3b82f6',
      outlineOffset: '2px'
    }
  } as CSSObject,

  content: {
    padding: '1.5rem',
    overflow: 'auto',
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  } as CSSObject
};
