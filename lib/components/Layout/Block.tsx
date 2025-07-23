import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type BlockProps = {
  children?: ReactNode;
  className?: {
    block?: CSSObject;
  };
  dataTestId?: string;
};

export const Block: React.FC<BlockProps> = ({
  children,
  className,
  dataTestId
}) => {
  return (
    <div
      css={[baseStyles.block, className?.block]}
      className="pa-block"
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

const baseStyles = {
  block: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column' as const
  }
};
