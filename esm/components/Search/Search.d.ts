import { CSSObject } from '@emotion/react';
type Search = {
    searchTerm?: string;
    searchLabel?: string;
    resultsCount?: number;
    buttonSize?: 'large' | 'medium' | 'small';
    inputSize?: 'large' | 'medium' | 'small';
    totalResultsCount?: string;
    buttonKind?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'ghostOnDark';
    showResultsCount?: boolean;
    labelPosition?: 'left' | 'right' | 'above' | 'below';
    label?: string;
    buttonText?: string;
    onDark?: boolean;
    resultsLabel?: React.ReactNode;
    useSearchButton?: boolean;
    className?: {
        searchWrapper?: CSSObject;
        resultsText?: CSSObject;
        searchForm?: CSSObject;
        searchFieldContainer?: CSSObject;
    };
    onSearch?: (searchTerm?: string) => void;
    setSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare const Search: React.FC<Search>;
export {};
