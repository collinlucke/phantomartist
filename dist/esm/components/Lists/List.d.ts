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
export declare const List: React.FC<ListProps>;
export {};
//# sourceMappingURL=List.d.ts.map