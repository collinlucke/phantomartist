import { colors } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type ListItemProps = {
  children?: JSX.Element;
  className?: {
    li: CSSObject;
    liHover: CSSObject;
  };
  useHover?: boolean;
};

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  useHover
}) => {
  return (
    <li
      css={[
        baseStyles.li,
        className && className.li,
        useHover && baseStyles.liHover,
        className && useHover && className.liHover
      ]}
    >
      {children}
    </li>
  );
};

const baseStyles = {
  li: {
    borderRadius: '6px',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: colors.tertiary
  },
  liHover: {
    ':hover': {
      boxShadow: `0 0 7px color-mix(in srgb-linear, ${colors.tertiary} 30%, black)`
    }
  }
};
