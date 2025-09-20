import { CSSObject, Theme } from '@emotion/react';
export type ConsumerThemeTypes = Theme & {
    button?: (params: {
        variant?: string;
        size?: string;
        iconOnly?: boolean;
    }) => CSSObject;
    buttonGroup?: (params: {
        direction?: 'horizontal' | 'vertical';
        gap?: 'small' | 'medium' | 'large';
    }) => CSSObject;
};
//# sourceMappingURL=CustomTypes.types.d.ts.map