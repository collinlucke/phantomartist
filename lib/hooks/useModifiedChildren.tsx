import React, { ReactElement } from 'react';
import * as stylex from '@stylexjs/stylex';
import { colors } from '../styling/tokens.stylex';
import { ModifyProps } from '../sharedTypes/ModifyProps.types';

type UseModifiedProps = ModifyProps & {
  element: ReactElement;
};

let newChildren: ReactElement;

export const useModifiedChildren: React.FC<UseModifiedProps> = (
  element,
  className
) => {
  const child = element.element;
  if (
    (!!child.props.children || child.props.children.length) &&
    React.isValidElement(child.props.children)
  ) {
    // Modifier 1 --> Make all <NavLink> elements, within the given child, consistent styles
    // throughout that block of code -- essentially all <a> tags used for routing
    if (
      typeof child.type === 'object' &&
      (child.type as React.ComponentType<object>).displayName === 'NavLink'
    ) {
      newChildren = React.cloneElement(child, {
        className: { ...stylex.props(baseStyles.a, className) }.className
      });
    }
    useModifiedChildren({
      element: child.props.children,
      className,
      props: {},
      type: child.type,
      key: child.key
    });
  }

  return newChildren;
};

const baseStyles = stylex.create({
  a: {
    color: colors.secondary,
    textDecoration: 'none'
  }
});
