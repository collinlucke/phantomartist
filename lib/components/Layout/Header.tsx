import { ReactElement, ReactNode } from 'react';
import { baseColors } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type HeaderModifyProps = {
  children?: ReactElement[];
  logo?: ReactNode;
  navigation?: ReactNode;
  actions?: ReactNode;
  useInnerWidth?: boolean;
  dataTestId?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  role?: 'banner' | 'navigation' | 'header';
  className?: {
    header?: CSSObject;
  };
  layout?: 'default' | 'centered' | 'spread';
};

export const Header: React.FC<HeaderModifyProps> = ({
  children,
  className,
  dataTestId,
  ariaLabel = 'Site header',
  ariaLabelledBy,
  role = 'banner'
}) => {
  // If children is provided, use legacy mode

  return (
    <header
      css={[localStyles.header, className?.header]}
      className="pa-header"
      data-testid={dataTestId}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      <>{children}</>
    </header>
  );
};

const localStyles = {
  header: {
    display: 'flex',
    padding: '20px 0',
    justifyContent: 'center',
    maxHeight: '75px',
    backgroundColor: baseColors.secondary[600]
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto'
  },
  navigationArea: {
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 auto',
    justifyContent: 'center'
  },
  actionsArea: {
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto',
    gap: '10px'
  }
};
