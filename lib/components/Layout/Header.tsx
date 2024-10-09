import React, { ReactElement } from 'react';
import { ModifyProps } from '../../sharedTypes/ModifyProps.types';
import { colors } from '../../styling/globalStyles';
import { CSSObject } from '@emotion/react';

type HeaderModifyProps = ModifyProps & {
  children: ReactElement;
  useInnerWidth?: boolean;
  isHeading?: boolean;
  className?: {
    header?: CSSObject;
    isHeading?: CSSObject;
    useInnerWidth?: CSSObject;
    innerWidth?: CSSObject;
  };
};

export const Header: React.FC<HeaderModifyProps> = ({
  children,
  className
}) => {
  return (
    <header
      css={[
        baseStyles.header,
        className && className.header,
        className && className.useInnerWidth,
        className && className.isHeading
      ]}
      className="pa-header"
    >
      {children}
    </header>
  );
};

const baseStyles = {
  header: {
    display: 'flex',
    marginBottom: '25px',
    padding: '20px 0',
    color: colors.secondary,
    justifyContent: 'center',
    height: '135px',
    backgroundColor: colors.tertiary
  },
  innerWidth: {
    alignSelf: 'center'
  }
};
