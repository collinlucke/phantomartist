import { CSSObject, Theme } from '@emotion/react';
export type ModifyPropsTypes = {
    props?: any;
    type?: any;
    key?: string | null;
};
export type ConsumerThemeTypes = Theme & {
    button?: (params: {
        kind?: string;
        size?: string;
        iconOnly?: boolean;
    }) => CSSObject;
};
