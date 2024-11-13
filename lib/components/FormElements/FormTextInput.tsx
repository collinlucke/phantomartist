import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { FormInputLabel } from './FormInputLabel';
import { CSSObject } from '@emotion/react';
import { baseColors } from '../../styling/baseTheme';

type FormTextInputProps = {
  label?: string | ReactNode;
  name?: string;
  type?: HTMLInputTypeAttribute;
  labelPos?: 'left' | 'right' | 'above' | 'below';
  value?: string;
  placeholder?: string;
  readonly?: boolean;
  size?: 'large' | 'medium' | 'small';
  className?: {
    input?: CSSObject;
    inputWrapper?: CSSObject;

    // For <FormInputLabel>
    label?: CSSObject;
    above?: CSSObject;
    below?: CSSObject;
    left?: CSSObject;
    right?: CSSObject;
  };

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormTextInput: React.FC<FormTextInputProps> = ({
  label = '',
  name = '',
  type = 'text',
  labelPos = 'left',
  value = '',
  placeholder,
  size = 'large',
  onChange,
  className,
  readonly
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <div css={[baseStyles.inputWrapper(labelPos), className?.inputWrapper]}>
      {(label && labelPos === 'left') || labelPos === 'above' ? (
        <FormInputLabel
          position={labelPos}
          name={name}
          label={label}
          className={className}
        />
      ) : (
        ''
      )}

      <input
        css={[
          baseStyles.input(size),
          readonly && baseStyles.readonly,
          className && className.input
        ]}
        value={value || ''}
        type={type}
        name={name}
        id={name}
        onChange={onChangeHandler}
        readOnly={readonly}
        placeholder={placeholder}
      />
      {(label && labelPos === 'right') || labelPos === 'below' ? (
        <FormInputLabel
          position={labelPos}
          name={name}
          label={label}
          className={className}
        />
      ) : (
        ''
      )}
    </div>
  );
};

const baseStyles = {
  inputWrapper: (labelPos: string) => ({
    marginBottom: '20px',
    display: 'flex',
    flexDirection:
      labelPos === 'above' || labelPos === 'below'
        ? ('column' as 'column')
        : ('row' as 'row')
  }),
  input: (size: string) => {
    return {
      border: `1px solid ${baseColors.tertiary}`,
      padding:
        (size === 'large' && '9px') ||
        (size === 'medium' && '8px') ||
        (size === 'small' && '5px') ||
        undefined,
      borderRadius: '5px',
      width: '100%'
    };
  },
  readonly: {
    backgroundColor: 'transparent',
    outline: 'none',
    padding: 0,
    border: 'none'
  }
};
