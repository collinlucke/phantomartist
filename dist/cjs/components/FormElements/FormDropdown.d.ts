type DropdownOption = {
    value: number | string;
    label?: string;
};
type DropdownProps = {
    options: DropdownOption[];
    onSelect: (option: number | string) => void;
};
export declare const FormDropdown: React.FC<DropdownProps>;
export {};
