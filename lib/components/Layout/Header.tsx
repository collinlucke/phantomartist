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
        className && className.innerWidth,
        className && className.isHeading
      )}
    >
      {useInnerWidth ? (
        <InnerWidth
          className={[baseStyles.innerWidth, className && className.innerWidth]}
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
    color: colors.tertiary,
    backgroundColor: 'green'
  },
  useInnerWidth: {
    justifyContent: 'center'
  },
  innerWidth: {
    alignSelf: 'center'
  },
  isHeading: {
    height: '135px',
    backgroundColor: `color-mix(in srgb, ${colors.tertiary} 40%, white)`
  }
});
