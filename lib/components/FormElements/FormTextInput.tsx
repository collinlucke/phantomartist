import { ReactNode } from 'react';
import { FormInputLabel } from './FormInputLabel';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type FormTextInputProps = {
  label?: string | ReactNode;
  name?: string;
  type?: 'text' | 'password' | 'number';
  labelPos?: 'left' | 'right' | 'above' | 'below';
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: StyleXStyles;
};

export const FormTextInput: React.FC<FormTextInputProps> = ({
  label = '',
  name = '',
  type = 'text',
  labelPos = 'left',
  value = '',
  onChange,
  className = {}
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <div>
      {labelPos === 'left' || labelPos === 'above' ? (
        <FormInputLabel position={labelPos} name={name} label={label} />
      ) : (
        ''
      )}
      <input
        {...stylex.props(baseStyles.input, className)}
        value={value}
        type={type}
        name={name}
        id={name}
        onChange={onChangeHandler}
      />
      {labelPos === 'right' || labelPos === 'below' ? (
        <FormInputLabel position={labelPos} name={name} label={label} />
      ) : (
        ''
      )}
    </div>
  );
};

const baseStyles = stylex.create({
  input: {
    border: 'none',
    padding: '10px',
    borderRadius: '10px'
  }
});
