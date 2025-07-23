import React from 'react';
export interface InputFieldProps {
    label: string;
    type?: 'text' | 'email' | 'password' | 'tel' | 'url';
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    error?: string;
    disabled?: boolean;
    id?: string;
}
export declare const InputField: React.FC<InputFieldProps>;
