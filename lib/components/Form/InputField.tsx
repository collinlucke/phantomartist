import React, { ReactNode, useRef, useLayoutEffect } from 'react';
import { CSSObject } from '@emotion/react';
import { baseColors, baseVibrantColors } from '../../styling/baseTheme';

export type InputFieldProps = {
  label?: string | ReactNode;
  name?: string;
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'tel'
    | 'url'
    | 'textarea'
    | 'search'
    | 'number';
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  readonly?: boolean;
  id?: string;
  onDark?: boolean;
  helperText?: string | ReactNode;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  'data-testid'?: string;

  // Layout options
  labelPosition?: 'left' | 'right' | 'above' | 'below';
  size?: 'large' | 'medium' | 'small';

  // Textarea specific
  autoResize?: boolean;

  // Custom styling
  className?: {
    container?: CSSObject;
    input?: CSSObject;
    label?: CSSObject;
    error?: CSSObject;
  };
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled = false,
  readonly = false,
  id,
  'data-testid': testId,
  labelPosition = 'above',
  size = 'medium',
  autoResize = false,
  className,
  onKeyDown,
  onDark = false,
  helperText
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Generate ID from label if it's a string, otherwise use name or fallback
  const inputId =
    id ||
    (typeof label === 'string'
      ? `input-${label.toLowerCase().replace(/\s+/g, '-')}`
      : name
      ? `input-${name}`
      : `input-${Math.random().toString(36).substring(2, 9)}`);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    if (autoResize && textAreaRef.current) {
      resizeTextArea(textAreaRef.current);
    }
  };

  const resizeTextArea = (textArea: HTMLTextAreaElement) => {
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  useLayoutEffect(() => {
    if (textAreaRef.current && type === 'textarea') {
      if (autoResize) {
        // Enable auto-resize: set height based on content
        resizeTextArea(textAreaRef.current);
      } else {
        // Disable auto-resize: reset to CSS-controlled height
        textAreaRef.current.style.height = '';
      }
    }
  }, [value, autoResize, type]);
  const labelElement = label ? (
    <label
      css={[
        localStyles({ labelPosition, size, autoResize, onDark }).label,
        className?.label
      ]}
      // css={[getStyles(labelPosition, size, autoResize).label, className?.label]}
      htmlFor={inputId}
    >
      {label}
      {required && (
        <span
          css={
            localStyles({ labelPosition, size, autoResize, onDark }).required
          }
        >
          *
        </span>
      )}
    </label>
  ) : null;

  const inputElement =
    type === 'textarea' ? (
      <textarea
        ref={textAreaRef}
        id={inputId}
        name={name}
        value={value}
        onChange={handleTextAreaChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        onKeyDown={onKeyDown}
        data-testid={testId}
        css={[
          localStyles({ labelPosition, size, autoResize }).textarea,
          error && localStyles({ labelPosition, size, autoResize }).inputError,
          disabled &&
            localStyles({ labelPosition, size, autoResize }).inputDisabled,
          readonly &&
            localStyles({ labelPosition, size, autoResize }).inputReadonly,
          className?.input
        ]}
        aria-describedby={error ? `${inputId}-error` : undefined}
      />
    ) : (
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        data-testid={testId}
        onKeyDown={onKeyDown}
        css={[
          localStyles({ labelPosition, size, autoResize }).input,
          error && localStyles({ labelPosition, size, autoResize }).inputError,
          disabled &&
            localStyles({ labelPosition, size, autoResize }).inputDisabled,
          readonly &&
            localStyles({ labelPosition, size, autoResize }).inputReadonly,
          className?.input
        ]}
        aria-describedby={error ? `${inputId}-error` : undefined}
      />
    );

  const errorElement = error ? (
    <div
      css={[
        localStyles({ labelPosition, size, autoResize }).error,
        className?.error
      ]}
      id={`${inputId}-error`}
      role="alert"
    >
      {error}
    </div>
  ) : null;

  const helperTextElement = (
    <div css={localStyles({ labelPosition, size, autoResize }).helperText}>
      {helperText}
    </div>
  );

  // Layout based on label position
  return (
    <div
      css={[
        // getStyles(labelPosition, size, autoResize).container,
        localStyles({ labelPosition, size, autoResize }).container,
        className?.container
      ]}
    >
      {(labelPosition === 'above' || labelPosition === 'left') && labelElement}
      {inputElement}
      {(labelPosition === 'below' || labelPosition === 'right') && labelElement}
      {errorElement}
      {helperTextElement}
    </div>
  );
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'large':
      return {
        padding: '0.75rem',
        fontSize: '1rem'
      };
    case 'small':
      return {
        padding: '0.3rem',
        fontSize: '0.625rem'
      };
    default: // medium
      return {
        padding: '0.5rem',
        fontSize: '0.875rem'
      };
  }
};

const localStyles = ({
  labelPosition,
  size,
  autoResize,
  onDark
}: {
  labelPosition: string;
  size: string;
  autoResize?: boolean;
  onDark?: boolean;
}) => ({
  container: {
    display: 'flex',
    flexDirection:
      labelPosition === 'above' || labelPosition === 'below'
        ? ('column' as const)
        : ('row' as const),
    gap: labelPosition === 'left' || labelPosition === 'right' ? '0.75rem' : '',
    flex: '1 1 0%', // Allow flex grow/shrink for side-by-side layouts
    width: '-webkit-fill-available', // Use available width in flex containers

    minWidth: 0, // Prevent flex items from overflowing
    alignItems:
      labelPosition === 'left' || labelPosition === 'right'
        ? 'center'
        : 'stretch' // marginBottom: '1.25rem'
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: onDark ? baseColors.tertiary[50] : baseColors.primary[900],
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    marginTop: labelPosition === 'below' ? '0.25rem' : '0',
    marginRight: labelPosition === 'left' ? '0.5rem' : '0',
    marginLeft: labelPosition === 'right' ? '0.5rem' : '0',
    alignSelf:
      labelPosition === 'left' || labelPosition === 'right'
        ? 'center'
        : 'flex-start'
  } as CSSObject,
  required: {
    color: '#ef4444',
    fontSize: '0.875rem'
  } as CSSObject,

  input: {
    ...getSizeStyles(size),
    border: `1px solid ${baseColors?.tertiary[500] || '#d1d5db'}`,
    borderRadius: '6px',
    transition: 'all 0.2s ease',
    minWidth: 0, // Prevent overflow in flex containers
    '&:focus': {
      outline: '2px solid #3b82f6',
      outlineOffset: '2px',
      borderColor: '#3b82f6'
    },
    '&::placeholder': {
      color: '#9ca3af'
    }
  } as CSSObject,

  textarea: {
    ...getSizeStyles(size),
    border: `1px solid ${baseColors?.tertiary[500] || '#d1d5db'}`,
    borderRadius: '6px',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease', // Removed height transition for auto-resize
    minWidth: 0, // Prevent overflow in flex containers
    minHeight: '3rem',
    resize: autoResize ? ('none' as const) : ('vertical' as const), // Conditional resize based on autoResize prop
    overflow: autoResize ? ('hidden' as const) : ('auto' as const), // Conditional overflow for auto-resize
    '&:focus': {
      outline: '2px solid #3b82f6',
      outlineOffset: '2px',
      borderColor: '#3b82f6'
    },
    '&::placeholder': {
      color: '#9ca3af'
    }
  } as CSSObject,

  inputError: {
    borderColor: '#ef4444',
    '&:focus': {
      outline: '2px solid #ef4444',
      borderColor: '#ef4444'
    }
  } as CSSObject,

  inputDisabled: {
    backgroundColor: '#f9fafb',
    color: '#6b7280',
    cursor: 'not-allowed'
  } as CSSObject,

  inputReadonly: {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    cursor: 'default'
  } as CSSObject,

  error: {
    fontSize: '0.75rem',
    color: baseVibrantColors.accent[500]
  } as CSSObject,

  helperText: {
    fontSize: '0.75rem',
    color: '#6b7280'
  } as CSSObject
});
