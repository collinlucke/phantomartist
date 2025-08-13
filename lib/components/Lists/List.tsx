import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';

type ListProps = {
  children?: ReactNode[];
  className?: CSSObject;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  role?: 'list' | 'menu' | 'menubar' | 'tablist' | 'tree' | 'grid';
  dataTestId?: string;
  ordered?: boolean;
};

export const List: React.FC<ListProps> = ({
  className,
  children,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  role = 'list',
  dataTestId,
  ordered = false
}) => {
  const ListElement = ordered ? 'ol' : 'ul';

  return (
    <ListElement
      css={[localStyles.list, className]}
      className="pa-list"
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      data-testid={dataTestId}
    >
      {children}
    </ListElement>
  );
};

const localStyles: { [key: string]: CSSObject } = {
  list: {
    fontWeight: '500',
    margin: 0,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
    paddingInlineStart: '0' // Remove default padding
  }
};
