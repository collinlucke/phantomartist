import { CSSObject } from '@emotion/react';
export declare const screenSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
};
export declare const mediaQueries: {
    minWidth: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    maxWidth: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    between: {
        xsToSm: string;
        smToMd: string;
        mdToLg: string;
        lgToXl: string;
        xlTo2xl: string;
    };
    mobile: string;
    tablet: string;
    desktop: string;
    portrait: string;
    landscape: string;
    retina: string;
    hover: string;
    noHover: string;
};
export declare const createResponsiveStyle: (styles: {
    base?: CSSObject;
    xs?: CSSObject;
    sm?: CSSObject;
    md?: CSSObject;
    lg?: CSSObject;
    xl?: CSSObject;
    "2xl"?: CSSObject;
}) => CSSObject;
export declare const baseColors: {
    primary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    secondary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    tertiary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    accent: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
};
export declare const baseVibrantColors: {
    primary: {
        300: string;
        500: string;
        700: string;
    };
    secondary: {
        300: string;
        500: string;
        700: string;
    };
    tertiary: {
        300: string;
        500: string;
        700: string;
    };
    accent: {
        300: string;
        500: string;
        700: string;
    };
};
export declare const baseTypography: {
    h1: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
        color: string;
    };
    h2: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
    };
    h3: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
    };
    h4: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
    };
    h5: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
    };
    h6: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
    };
    a: {
        textDecoration: string;
        color: string;
    };
    bodyLarge: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
    };
    body: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
    };
    bodySmall: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
    };
};
export declare const baseTheme: {
    button: ({ kind, size, iconOnly }: {
        kind?: string;
        size?: string;
        iconOnly?: boolean;
    }) => CSSObject;
    buttonGroup: ({ direction, gap }?: {
        direction?: "horizontal" | "vertical";
        gap?: "small" | "medium" | "large";
    }) => CSSObject;
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
        width: string;
    };
    modalHeading: {
        alignSelf: string;
    };
    modalCloseButton: {
        cursor: string;
    };
    modalContent: Record<string, unknown>;
};
