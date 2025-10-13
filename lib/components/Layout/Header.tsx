import { forwardRef, ReactNode, Ref } from 'react';
import { baseColors } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type HeaderModifyProps = {
  children?: ReactNode;
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

export type RefProp = Ref<HTMLDivElement>;

export const Header = forwardRef<HTMLDivElement, HeaderModifyProps>(
  (
    {
      children,
      className,
      dataTestId,
      ariaLabel = 'Site header',
      ariaLabelledBy,
      role = 'banner'
    },
    ref
  ) => {
    return (
      <header
        css={[localStyles.header, className?.header]}
        ref={ref}
        className="pa-header"
        data-testid={dataTestId}
        role={role}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
      >
        <>{children}</>
      </header>
    );
  }
) as React.ForwardRefExoticComponent<
  HeaderModifyProps & React.RefAttributes<HTMLDivElement>
>;

Header.displayName = 'Header';

const localStyles = {
  header: {
    display: 'flex',
    padding: '5px 0',
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
