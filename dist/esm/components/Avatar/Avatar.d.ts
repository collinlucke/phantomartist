import { CSSObject } from '@emotion/react';
type AvatarProps = {
    displayName: string;
    imageUrl?: string;
    className?: {
        avatar?: CSSObject;
        initials?: CSSObject;
        image?: CSSObject;
    };
    size?: number;
};
export declare const Avatar: ({ displayName, className, size }: AvatarProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Avatar.d.ts.map