import React, { ReactElement } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { ModifyProps } from '../../sharedTypes/ModifyProps.types';
import { colors } from '../../styling/tokens.stylex';
import { InnerWidth } from './InnerWidth';

type HeaderModifyProps = ModifyProps & {
  children: ReactElement;
  useInnerWidth?: boolean;
  isHeading?: boolean;
  className?: {
    header?: StyleXStyles;
    isHeading?: StyleXStyles;
    useInnerWidth?: StyleXStyles;
    innerWidth?: StyleXStyles;
  };
};

export const Header: React.FC<HeaderModifyProps> = ({
  children,
  className,
  useInnerWidth,
  isHeading
}) => {
  return (
    <header
      {...stylex.props(
        baseStyles.header,
        useInnerWidth && baseStyles.useInnerWidth,
        isHeading && baseStyles.isHeading,
        className && className.header,
        className && className.useInnerWidth,
        className && className.isHeading
      )}
    >
      {useInnerWidth ? (
        <InnerWidth
          className={{
            ...baseStyles,
            ...(className && className)
          }}
        >
          {children}
        </InnerWidth>
      ) : (
        children
      )}
    </header>
  );
};

const baseStyles = stylex.create({
  header: {
    display: 'flex',
    marginBottom: '25px',
    color: colors.tertiary
  },
  useInnerWidth: {
    justifyContent: 'center'
  },
  isHeading: {
    height: '135px',
    backgroundColor: colors.tertiary
  },
  innerWidth: {
    alignSelf: 'center'
  },
  PANavLink: {
    color: colors.secondary
  }
});
