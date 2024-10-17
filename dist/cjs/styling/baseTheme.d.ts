export declare const baseTheme: {
    h2: {
        color: () => string;
    };
    colors: {
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
    buttons: ({ kind, size }: {
        kind: string;
        size: string;
    }) => {
        fontWeight: string;
        borderRadius: string;
        padding: string | undefined;
        border: string | undefined;
        color: string;
        backgroundColor: string | undefined;
        '&:hover': {
            boxShadow: string;
        };
    };
    img: () => {
        border: string;
        borderRadius: string;
    };
    buttonGroup: {
        display: string;
        gap: string;
    };
};
export declare const testTheme: {
    h2: {
        color: string;
    };
};
