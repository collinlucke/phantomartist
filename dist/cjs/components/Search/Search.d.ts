import { ChangeEvent } from 'react';
import { CSSObject } from '@emotion/react';
type Search = {
    searchTerm?: string;
    searchLabel?: string;
    resultsCount?: number;
    buttonSize?: 'large' | 'medium' | 'small';
    inputSize?: 'large' | 'medium' | 'small';
    totalResultsCount?: string;
    useSearchButton?: boolean;
    className?: {
        searchWrapper?: CSSObject;
    };
    onSearch?: React.FormEventHandler<HTMLFormElement>;
    setSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void;
};
export declare const Search: React.FC<Search>;
export {};
