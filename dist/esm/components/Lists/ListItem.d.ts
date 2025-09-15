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
export declare const ListItem: React.FC<ListItemProps>;
export {};
//# sourceMappingURL=ListItem.d.ts.map