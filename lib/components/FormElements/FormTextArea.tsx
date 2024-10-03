import { ReactNode, useRef, useLayoutEffect } from 'react';
import { FormInputLabel } from './FormInputLabel';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type FormTextAreaProps = {
  label?: string | ReactNode;
  name?: string;
  type?: HTMLInputElement;
  labelPos?: 'left' | 'right' | 'above' | 'below';
  value?: string;
  readonly?: boolean;
  autoResize?: boolean;
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

  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  label = '',
  name = '',
  labelPos,
  value = '',
  onChange,
  className,
  readonly,
  autoResize
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
    resize(e.target);
  };

  const resize = (textArea: HTMLTextAreaElement) => {
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  useLayoutEffect(() => {
    if (textAreaRef.current && autoResize) {
      resize(textAreaRef.current);
    }
  }, [value]);

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
        {...stylex.props(
          baseStyles.textArea,
          readonly && baseStyles.readonly,
          className && className.textArea
        )}
        value={value}
        name={name}
        id={name}
        onChange={onChangeHandler}
        readOnly={readonly}
        ref={textAreaRef}
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
    width: '100%',
    minHeight: '50px',
    resize: 'none',
    overflow: 'hidden'
  },
  readonly: {
    backgroundColor: 'transparent',
    outline: 'none',
    padding: 0
  }
});
