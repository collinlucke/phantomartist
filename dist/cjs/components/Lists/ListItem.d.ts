import { CSSObject } from '@emotion/react';
type ListItemProps = {
    children?: JSX.Element;
    className?: {
        li?: CSSObject;
        liHover?: CSSObject;
    };
    useHover?: boolean;
};
export declare const ListItem: React.FC<ListItemProps>;
export {};
