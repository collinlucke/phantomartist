import { CSSObject } from '@emotion/react';
type DropdownProps = {
    children: React.ReactNode;
    showDropdown: boolean;
    className?: {
        dropdownWrapper?: CSSObject;
    };
    dropdownRef: React.RefObject<HTMLDivElement>;
    closeDropdown: (show: boolean) => void;
};
export declare const Dropdown: ({ children, showDropdown, closeDropdown, className, dropdownRef }: DropdownProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Dropdown.d.ts.map