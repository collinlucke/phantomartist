import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type BlockProps = {
  children?: ReactNode;
  className?: {
    block?: CSSObject;
  };
};

export const Block: React.FC<BlockProps> = ({ children, className }) => {
  return (
    <div css={[baseStyles.block, className?.block]} className="pa-block">
      {children}
    </div>
  );
};

const baseStyles = {
  block: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'end'
  }
};
