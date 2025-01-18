import { CSSObject } from '@emotion/react';
import { ReactNode } from 'react';

type MainProps = {
  children?: ReactNode;
  className?: CSSObject;
};

export const Main: React.FC<MainProps> = ({ children, className }) => {
  return (
    <main className="pa-main" css={[baseStyles.main, className?.main]}>
      {children}
    </main>
  );
};

const baseStyles = {
  main: {
    display: 'flex',
    justifyContent: 'center'
  }
};
