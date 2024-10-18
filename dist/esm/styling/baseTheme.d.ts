import { CSSObject } from '@emotion/react';
export declare const baseColors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    tertiary: string;
    tertiaryLight: string;
    tertiaryDark: string;
    accentLight: string;
    accentDark: string;
};
export declare const baseTheme: {
    button: ({ kind, size }: {
        kind: string;
        size: string;
    }) => CSSObject;
    buttonGroup: {
        display: string;
        gap: string;
    };
    img: () => {
        border: string;
        borderRadius: string;
    };
    modal: {
        position: "absolute";
        width: string;
        height: string;
        top: number;
        left: number;
        display: string;
        justifyContent: string;
        alignItems: string;
        backgroundColor: string;
    };
};
export declare const testTheme: {
    h2: {
        color: string;
    };
};
