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
    button: ({ kind, size, iconOnly }: {
        kind?: string;
        size?: string;
        iconOnly?: boolean;
    }) => CSSObject;
    buttonGroup: {
        display: string;
        gap: string;
        justifyContent: string;
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
        flexDirection: "column";
    };
    modalContentWrapper: {
        backgroundColor: string;
        padding: string;
        boxShadow: string;
        display: string;
        flexDirection: "column";
    };
    modalHeading: {
        alignSelf: string;
    };
    modalCloseButton: {
        cursor: string;
    };
    modalContent: {};
};
export declare const testTheme: {
    h2: {
        color: string;
    };
};
