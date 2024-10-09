import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { FormInputLabel } from './FormInputLabel';
import { CSSObject } from '@emotion/react';

type FormTextInputProps = {
  label?: string | ReactNode;
  name?: string;
  type?: HTMLInputTypeAttribute;
  labelPos?: 'left' | 'right' | 'above' | 'below';
  value?: string;
  readonly?: boolean;
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
        <FormInputLabel position={labelPos} name={name} label={label} />
      ) : (
        ''
      )}

      <input
        css={[
          baseStyles.input,
          readonly && baseStyles.readonly,
          className && className.input
        ]}
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

const baseStyles = {
  inputWrapper: (labelPos: string) => ({
    marginBottom: '20px',
    display: 'flex',
    flexDirection:
      labelPos === 'above' || labelPos === 'below'
        ? ('column' as 'column')
        : ('row' as 'row')
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
};
