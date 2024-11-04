import { baseColors, shadesAndTints } from '../../styling/baseTheme';
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
      className="pa-list-item"
    >
      {children}
    </li>
  );
};

const baseStyles = {
  li: {
    borderRadius: '6px',
    border: `1px solid ${baseColors.secondary}`,
    marginBottom: '10px',
    padding: '10px',
    color: baseColors.secondary,
    display: 'flex'
  },
  liHover: {
    ':hover': {
      boxShadow: `0 0 7px ${shadesAndTints.secondaryDark}`
    }
  }
};
