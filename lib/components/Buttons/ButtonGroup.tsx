import React, { ReactElement, KeyboardEventHandler } from 'react';
import { CSSObject, useTheme } from '@emotion/react';
import { ConsumerThemeTypes } from '../../CustomTypes.types';
import { baseTheme } from '../../styling/baseTheme';

type ButtonGroupProps = {
  children: ReactElement | ReactElement[];
  className?: {
    buttonGroup?: CSSObject;
  };
  direction?: 'horizontal' | 'vertical';
  gap?: 'small' | 'medium' | 'large';
  dataTestId?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  role?: 'group' | 'toolbar' | 'radiogroup';
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  direction = 'horizontal',
  gap = 'medium',
  dataTestId,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  role = 'group',
  onKeyDown
}) => {
  const consumerTheme = useTheme() as ConsumerThemeTypes;

  // Handle keyboard navigation for button groups
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = e => {
    if (role === 'toolbar' || role === 'radiogroup') {
      const buttons = e.currentTarget.querySelectorAll(
        'button:not([disabled])'
      );
      const currentIndex = Array.from(buttons).findIndex(
        button => button === document.activeElement
      );
      let nextIndex = currentIndex;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          nextIndex =
            direction === 'horizontal'
              ? e.key === 'ArrowRight'
                ? currentIndex + 1
                : currentIndex
              : e.key === 'ArrowDown'
              ? currentIndex + 1
              : currentIndex;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          nextIndex =
            direction === 'horizontal'
              ? e.key === 'ArrowLeft'
                ? currentIndex - 1
                : currentIndex
              : e.key === 'ArrowUp'
              ? currentIndex - 1
              : currentIndex;
          break;
        case 'Home':
          e.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          nextIndex = buttons.length - 1;
          break;
      }

      // Wrap around navigation
      if (nextIndex < 0) nextIndex = buttons.length - 1;
      if (nextIndex >= buttons.length) nextIndex = 0;

      if (nextIndex !== currentIndex && buttons[nextIndex]) {
        (buttons[nextIndex] as HTMLElement).focus();
      }
    }

    onKeyDown?.(e);
  };

  return (
    <div
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      role={role}
      onKeyDown={handleKeyDown}
      css={[
        baseTheme.buttonGroup({ direction, gap }),
        consumerTheme?.buttonGroup &&
          consumerTheme.buttonGroup({ direction, gap }),
        className?.buttonGroup
      ]}
      className={`pa-button-group ${direction} ${gap}`}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};
