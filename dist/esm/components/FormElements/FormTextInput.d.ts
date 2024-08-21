type FormTextInputProps = {
    label?: string;
    name?: string;
    type?: 'text' | 'password' | 'number';
    labelPos?: 'left' | 'right' | 'above' | 'below';
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare const FormTextInput: React.FC<FormTextInputProps>;
export {};
