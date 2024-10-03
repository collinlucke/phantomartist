import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { FormInputLabel } from './FormInputLabel';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type FormTextInputProps = {
  label?: string | ReactNode;
  name?: string;
  type?: HTMLInputTypeAttribute;
  labelPos?: 'left' | 'right' | 'above' | 'below';
  value?: string;
  readonly?: boolean;
  className?: {
    input?: StyleXStyles;
    inputWrapper?: StyleXStyles;
    // For <FormInputLabel>
    label?: StyleXStyles;
    above?: StyleXStyles;
    below?: StyleXStyles;
    left?: StyleXStyles;
    right?: StyleXStyles;
  };

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormTextInput: React.FC<FormTextInputProps> = ({
  label = '',
  name = '',
  type = 'text',
  labelPos = 'left',
  value = '',
  onChange,
  className,
  readonly
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <div
      {...stylex.props(
        baseStyles.inputWrapper(labelPos),
        className && className.inputWrapper
      )}
    >
      {(label && labelPos === 'left') || labelPos === 'above' ? (
        <FormInputLabel position={labelPos} name={name} label={label} />
      ) : (
        ''
      )}

      <input
        {...stylex.props(
          baseStyles.input,
          readonly && baseStyles.readonly,
          className && className.input
        )}
        value={value || ''}
        type={type}
        name={name}
        id={name}
        onChange={onChangeHandler}
        readOnly={readonly}
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

const baseStyles = stylex.create({
  inputWrapper: labelPos => ({
    marginBottom: '20px',
    display: 'flex',
    flexDirection:
      labelPos === 'above' || labelPos === 'below' ? 'column' : 'row'
  }),
  input: {
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    width: '100%'
  },
  readonly: {
    backgroundColor: 'transparent',
    outline: 'none',
    padding: 0
  }
});
