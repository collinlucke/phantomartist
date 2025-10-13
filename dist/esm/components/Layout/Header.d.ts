import { ReactNode, Ref } from 'react';
import { CSSObject } from '@emotion/react';
type HeaderModifyProps = {
    children?: ReactNode;
    logo?: ReactNode;
    navigation?: ReactNode;
    actions?: ReactNode;
    useInnerWidth?: boolean;
    dataTestId?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    role?: 'banner' | 'navigation' | 'header';
    className?: {
        header?: CSSObject;
    };
    layout?: 'default' | 'centered' | 'spread';
};
export type RefProp = Ref<HTMLDivElement>;
export declare const Header: React.ForwardRefExoticComponent<HeaderModifyProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Header.d.ts.map