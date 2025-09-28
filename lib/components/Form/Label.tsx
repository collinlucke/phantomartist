import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import { baseColors } from '../../styling/baseTheme';

type LabelProps = {
  label: string | ReactNode;
  required?: boolean;
  htmlFor?: string;
  className?: CSSObject;
  labelPosition?: 'above' | 'below' | 'left' | 'right';
  onDark?: boolean;
};

export const Label = ({
  label,
  required,
  htmlFor,
  className,
  labelPosition = 'above',
  onDark
}: LabelProps) => {
  return (
    <label
      css={[localStyles({ labelPosition, onDark }).label, className]}
      htmlFor={htmlFor}
    >
      {label}
      {required && (
        <span
          css={localStyles({ labelPosition, onDark }).required}
          aria-label="required"
        >
          *
        </span>
      )}
    </label>
  );
};

const localStyles = ({
  labelPosition,
  onDark
}: {
  labelPosition: string;
  onDark?: boolean;
}) => ({
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
  } as CSSObject
});
