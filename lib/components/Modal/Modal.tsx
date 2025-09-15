import React from 'react';
import { CSSObject } from '@emotion/react';
import { CancelCircleIcon } from 'hugeicons-react';
import { baseColors } from '../../styling/baseTheme';
import { Button } from '../Buttons/Button';

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

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = '400px',
  showCloseButton = true,
  dataTestId,
  className,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  trapFocus = true,
  initialFocusRef,
  finalFocusRef,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy
}) => {
  const [previouslyFocusedElement, setPreviouslyFocusedElement] =
    React.useState<HTMLElement | null>(null);
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // Focus trap implementation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!trapFocus || e.key !== 'Tab') return;

    const modalElement = modalRef.current;
    if (!modalElement) return;

    const focusableElements = modalElement.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      setPreviouslyFocusedElement(document.activeElement as HTMLElement);

      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        if (initialFocusRef?.current) {
          initialFocusRef.current.focus();
        } else {
          const modalElement = modalRef.current;
          if (modalElement) {
            const firstFocusable = modalElement.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            ) as HTMLElement;
            if (firstFocusable) {
              firstFocusable.focus();
            }
          }
        }
      }, 0);
    } else {
      document.body.style.overflow = '';

      if (finalFocusRef?.current) {
        finalFocusRef.current.focus();
      } else if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [
    isOpen,
    onClose,
    closeOnEscape,
    initialFocusRef,
    finalFocusRef,
    previouslyFocusedElement
  ]);

  if (!isOpen) return null;

  const titleId = title ? `${dataTestId || 'modal'}-title` : undefined;
  const effectiveAriaLabelledBy = ariaLabelledBy || titleId;

  return (
    <div
      css={[localStyles.backdrop, className?.backdrop]}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        css={[localStyles.modal, { maxWidth }, className?.modal]}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={effectiveAriaLabelledBy}
        aria-describedby={ariaDescribedBy}
        data-testid={dataTestId}
      >
        {(title || showCloseButton) && (
          <div css={[localStyles.header, className?.header]}>
            {title && (
              <h1 css={[localStyles.title, className?.title]} id={titleId}>
                {title}
              </h1>
            )}
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
        <div css={[localStyles.content, className?.content]}>{children}</div>
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
    color: baseColors.primary[500],
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
