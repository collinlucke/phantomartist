// HeadMain is always the main heading for the entire app. It will alway navigate to the home page.
// You don't like that, come at me
import { FC, ReactElement } from 'react';
import type { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import { colors } from '../../styling/tokens.stylex';
import { PANavLink } from '../Navigation';
import { InnerWidth } from './InnerWidth';

type HeaderMain = {
  children?: ReactElement;
  homeLinkContent?: ReactElement;
  rightContent?: ReactElement;
  className?: {
    header: StyleXStyles;
    paNavLink: StyleXStyles;
  };
};

export const HeaderMain: FC<HeaderMain> = ({
  className,
  children,
  homeLinkContent,
  rightContent
}) => {
  return (
    <header {...stylex.props(baseStyles.header)}>
      <InnerWidth className={baseStyles}>
        <PANavLink
          to="/"
          className={{
            ...baseStyles,
            ...(className && className)
          }}
        >
          {homeLinkContent || children || <></>}
        </PANavLink>
        <div>{rightContent}</div>
      </InnerWidth>
    </header>
  );
};

const baseStyles = stylex.create({
  header: {
    height: '135px',
    backgroundColor: colors.tertiary,
    display: 'flex',
    marginBottom: '25px',
    justifyContent: 'center'
  },
  innerWidth: {
    display: 'flex',
    alignItems: 'baseline',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  paNavLink: {
    color: colors.secondary
  }
});
