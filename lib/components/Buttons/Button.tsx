import {
  MouseEventHandler,
  ReactElement,
  forwardRef,
  KeyboardEventHandler
} from 'react';
import { CSSObject, useTheme } from '@emotion/react';
import { ConsumerThemeTypes } from '../../CustomTypes.types';
import { baseTheme } from '../../styling/baseTheme';

type ButtonProps = {
  children?: ReactElement | string;
  className?: {
    button?: CSSObject;
  };
  type?: HTMLButtonElement['type'];
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'ghostOnDark'
    | 'outline';
  size?: 'small' | 'medium' | 'large';
  iconOnly?: boolean;
  icon?: ReactElement | string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaExpanded?: boolean;
  ariaHaspopup?:
    | boolean
    | 'false'
    | 'true'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog';
  ariaPressed?: boolean;
  role?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  tabIndex?: number;
  testId?: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      type,
      variant = 'primary',
      size = 'large',
      icon,
      iconOnly,
      ariaLabel,
      ariaDescribedBy,
      ariaExpanded,
      ariaHaspopup,
      ariaPressed,
      role,
      disabled = false,
      autoFocus = false,
      tabIndex,
      testId,
      onClick,
      onKeyDown,
      onFocus,
      onBlur
    },
    ref
  ) => {
    const consumerTheme = useTheme() as ConsumerThemeTypes;
    const onClickHandler: MouseEventHandler<HTMLButtonElement> = e => {
      onClick?.(e);
    };

    // Generate aria-label for icon-only buttons if not provided
    const effectiveAriaLabel =
      ariaLabel || (iconOnly && !children ? 'Button' : undefined);
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClickHandler}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        tabIndex={disabled ? -1 : tabIndex}
        role={role}
        data-testid={testId}
        css={[
          baseTheme.button({ variant, size, iconOnly }),
          consumerTheme?.button &&
            consumerTheme.button({ variant, size, iconOnly }),
          className?.button
        ]}
        className={`pa-button ${variant} ${size}`}
        aria-label={effectiveAriaLabel}
        aria-describedby={ariaDescribedBy}
        aria-expanded={ariaExpanded}
        aria-haspopup={ariaHaspopup}
        aria-pressed={ariaPressed}
      >
        {icon ? (
          <>
            {typeof icon === 'string' ? (
              <span aria-hidden="true">{icon}</span>
            ) : (
              icon
            )}
            {children}
          </>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
