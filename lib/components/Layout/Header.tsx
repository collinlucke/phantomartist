import { ReactElement, ReactNode } from 'react';
import { baseColors, shadesAndTints } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type HeaderModifyProps = {
  children?: ReactElement;
  logo?: ReactNode;
  navigation?: ReactNode;
  actions?: ReactNode;
  useInnerWidth?: boolean;
  dataTestId?: string;
  className?: {
    header?: CSSObject;
    useInnerWidth?: CSSObject;
    innerWidth?: CSSObject;
    logoArea?: CSSObject;
    navigationArea?: CSSObject;
    actionsArea?: CSSObject;
  };
  layout?: 'default' | 'centered' | 'spread';
};

export const Header: React.FC<HeaderModifyProps> = ({
  children,
  logo,
  navigation,
  actions,
  className,
  dataTestId,
  layout = 'default'
}) => {
  // If children is provided, use legacy mode
  if (children) {
    return (
      <header
        css={[baseStyles.header, className?.header]}
        className="pa-header"
        data-testid={dataTestId}
      >
        {children}
      </header>
    );
  }

  // New slot-based layout
  const layoutStyles = getLayoutStyles(layout);

  return (
    <header
      css={[baseStyles.header, layoutStyles, className?.header]}
      className="pa-header"
      data-testid={dataTestId}
    >
      {logo && (
        <div css={[baseStyles.logoArea, className?.logoArea]}>{logo}</div>
      )}
      {navigation && (
        <div css={[baseStyles.navigationArea, className?.navigationArea]}>
          {navigation}
        </div>
      )}
      {actions && (
        <div css={[baseStyles.actionsArea, className?.actionsArea]}>
          {actions}
        </div>
      )}
    </header>
  );
};

const getLayoutStyles = (layout: 'default' | 'centered' | 'spread') => {
  switch (layout) {
    case 'centered':
      return { justifyContent: 'center' };
    case 'spread':
      return { justifyContent: 'space-between' };
    default:
      return { justifyContent: 'space-between' };
  }
};

const baseStyles = {
  header: {
    display: 'flex',
    marginBottom: '25px',
    padding: '20px 0',
    color: baseColors.secondary,
    justifyContent: 'center',
    height: '115px',
    backgroundColor: shadesAndTints.tertiaryLight,
    alignItems: 'center',
    '@media (max-width: 580px)': {
      height: '75px'
    }
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
