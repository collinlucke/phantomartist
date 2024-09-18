import { ReactNode } from 'react';
import { FormInputLabel } from './FormInputLabel';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type FormTextAreaProps = {
  label?: string | ReactNode;
  name?: string;
  type?: 'text' | 'password' | 'number';
  labelPos?: 'left' | 'right' | 'above' | 'below';
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: {
    textArea: StyleXStyles;
    textAreaWrapper: StyleXStyles;
    // For <FormInputLabel>
    label: StyleXStyles;
    above: StyleXStyles;
    below: StyleXStyles;
    left: StyleXStyles;
    right: StyleXStyles;
  };
};

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  label = '',
  name = '',
  labelPos = 'left',
  value = '',
  onChange,
  className
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
  };

  return (
    <div
      {...stylex.props(
        baseStyles.textAreaWrapper,
        className && className.textAreaWrapper
      )}
    >
      {labelPos === 'left' || labelPos === 'above' ? (
        <FormInputLabel position={labelPos} name={name} label={label} />
      ) : (
        ''
      )}
      <textarea
        {...stylex.props(baseStyles.textArea, className && className.textArea)}
        value={value}
        name={name}
        id={name}
        onChange={onChangeHandler}
      />
      {labelPos === 'right' || labelPos === 'below' ? (
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
  textAreaWrapper: {
    marginBottom: '20px'
  },
  textArea: {
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    width: '100%'
  }
});
