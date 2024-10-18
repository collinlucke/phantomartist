import { ReactNode, useRef, useLayoutEffect } from 'react';
import { FormInputLabel } from './FormInputLabel';
import { CSSObject } from '@emotion/react';
import { baseColors } from '../../styling/baseTheme';

type FormTextAreaProps = {
  label?: string | ReactNode;
  name?: string;
  type?: HTMLInputElement;
  labelPos?: 'left' | 'right' | 'above' | 'below';
  value?: string;
  readonly?: boolean;
  autoResize?: boolean;
  className?: {
    textArea?: CSSObject;
    textAreaWrapper?: CSSObject;
    // For <FormInputLabel>
    label?: CSSObject;
    above?: CSSObject;
    below?: CSSObject;
    left?: CSSObject;
    right?: CSSObject;
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
    <div css={[baseStyles.textAreaWrapper, className?.textAreaWrapper]}>
      {labelPos === 'left' || labelPos === 'above' ? (
        <FormInputLabel
          position={labelPos}
          name={name}
          label={label}
          className={{
            [labelPos]: className?.[labelPos],
            label: className?.label
          }}
        />
      ) : (
        ''
      )}
      <textarea
        css={[
          baseStyles.textArea,
          readonly && baseStyles.readonly,
          className && className.textArea
        ]}
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
          className={{
            [labelPos]: className?.[labelPos],
            label: className?.label
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
};

const baseStyles = {
  textAreaWrapper: {
    marginBottom: '20px'
  },
  textArea: {
    border: `1px solid ${baseColors.tertiary}`,
    padding: '10px',
    borderRadius: '5px',
    width: '100%',
    minHeight: '50px',
    resize: 'none' as 'none',
    overflow: 'hidden'
  },
  readonly: {
    backgroundColor: 'transparent',
    outline: 'none',
    padding: 0,
    border: 'none'
  }
};
