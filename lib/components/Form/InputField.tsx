import React from 'react';
import { CSSObject } from '@emotion/react';

export interface InputFieldProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  id?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled = false,
  id
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div css={styles.container}>
      <label css={styles.label} htmlFor={inputId}>
        {label}
        {required && <span css={styles.required}>*</span>}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        css={[styles.input, error && styles.inputError, disabled && styles.inputDisabled]}
        aria-describedby={error ? `${inputId}-error` : undefined}
      />
      {error && (
        <div css={styles.error} id={`${inputId}-error`} role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  } as CSSObject,

  label: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#374151',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  } as CSSObject,

  required: {
    color: '#ef4444',
    fontSize: '0.875rem'
  } as CSSObject,

  input: {
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
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

  error: {
    fontSize: '0.875rem',
    color: '#ef4444',
    marginTop: '0.25rem'
  } as CSSObject
};
