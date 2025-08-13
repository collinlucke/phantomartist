import { baseColors } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type ListItemProps = {
  children?: JSX.Element;
  className?: {
    li?: CSSObject;
    liHover?: CSSObject;
  };
  useHover?: boolean;
  role?: 'listitem' | 'menuitem' | 'tab' | 'treeitem' | 'option';
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaSelected?: boolean;
  ariaExpanded?: boolean;
  ariaLevel?: number;
  tabIndex?: number;
  dataTestId?: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLLIElement>) => void;
};

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  useHover,
  role = 'listitem',
  ariaLabel,
  ariaDescribedBy,
  ariaSelected,
  ariaExpanded,
  ariaLevel,
  tabIndex,
  dataTestId,
  onClick,
  onKeyDown
}) => {
  return (
    <li
      css={[
        localStyles.li,
        className && className.li,
        useHover && localStyles.liHover,
        className && useHover && className.liHover
      ]}
      className="pa-list-item"
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-selected={ariaSelected}
      aria-expanded={ariaExpanded}
      aria-level={ariaLevel}
      tabIndex={tabIndex}
      data-testid={dataTestId}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </li>
  );
};

const localStyles: { [key: string]: CSSObject } = {
  li: {
    borderRadius: '6px',
    border: `1px solid ${baseColors.secondary[500]}`,
    marginBottom: '10px',
    padding: '10px',
    color: baseColors.secondary[500],
    display: 'flex'
  },
  liHover: {
    ':hover': {
      backgroundColor: baseColors.secondary[50]
    }
  }
};
