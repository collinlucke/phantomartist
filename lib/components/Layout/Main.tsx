import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import { baseColors } from '../../styling/baseTheme';

type MainProps = {
  children?: ReactNode;
  className?: CSSObject;
  isDark?: boolean;
  backgroundImage?: string;
};

export const Main: React.FC<MainProps> = ({
  children,
  className,
  isDark = false
}) => {
  return (
    <main className="pa-main" css={[localStyles(isDark).main, className?.main]}>
      {children}
    </main>
  );
};

const localStyles = (isDark: boolean) => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: isDark ? baseColors.primary[500] : baseColors.tertiary[50],
    color: isDark ? baseColors.tertiary[50] : baseColors.primary[500]
  }
});
