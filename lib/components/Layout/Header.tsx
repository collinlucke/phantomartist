import React, { ReactElement } from 'react';
// import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import { useModifiedChildren } from '../../hooks/useModifiedChildren';
import { ModifyProps } from '../../sharedTypes/ModifyProps.types';

type HeaderModifyProps = ModifyProps & {
  children: ReactElement;
};

export const Header: React.FC<HeaderModifyProps> = ({
  children,
  className,
  props,
  type,
  key
}) => {
  let modifiedChildren = useModifiedChildren({
    element: children,
    className,
    props: {},
    type: children.type,
    key: children.key
  });

  // Keeps the build quiet
  console.log(props, type, key);

  return (
    <header {...stylex.props(baseStyles.header, className)}>
      {modifiedChildren || children}
    </header>
  );
};
const baseStyles = stylex.create({
  header: {
    display: 'flex',
    justifyContent: 'center'
  }
});
