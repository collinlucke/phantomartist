import React from 'react';
import { InputField } from '../Form';
import { Button } from '../Buttons';
import { mediaQueries } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type Search = {
  searchTerm?: string;
  searchLabel?: string;
  buttonSize?: 'large' | 'medium' | 'small';
  inputSize?: 'large' | 'medium' | 'small';
  totalResultsCount?: string;
  buttonKind?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'ghost'
    | 'ghostOnDark'
    | 'outline';
  showResultsCount?: boolean;
  labelPosition?: 'left' | 'right' | 'above' | 'below';
  label?: string;
  buttonText?: string;
  onDark?: boolean;
  resultsLabel?: React.ReactNode;
  useSearchButton?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  resultsAriaLive?: 'polite' | 'assertive' | 'off';
  searchRole?: string;
  dataTestId?: string;
  autoFocus?: boolean;
  className?: {
    searchWrapper?: CSSObject;
    resultsText?: CSSObject;
    searchForm?: CSSObject;
    searchFieldContainer?: CSSObject;
    searchButton?: CSSObject;
  };

  onSearch?: (searchTerm: string) => void;
  setSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<Search> = ({
  searchTerm,
  searchLabel,
  totalResultsCount = '0',
  resultsLabel,
  className,
  buttonSize,
  inputSize,
  buttonKind = 'primary',
  showResultsCount = true,
  labelPosition = 'above',
  label,
  buttonText,
  onDark = false,
  useSearchButton = true,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  resultsAriaLive = 'polite',
  searchRole,
  dataTestId,
  autoFocus = false,
  onSearch,
  setSearchTerm
}) => {
  const setSearchTermHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      setSearchTerm(e as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleOnSearch = () => {
    onSearch?.(searchTerm || '');
  };

  const hitEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnSearch();
    }
  };

  return (
    <div
      css={[localStyles.searchForm, className?.searchForm]}
      className="pa-search-form"
      role={searchRole || 'search'}
      aria-label={ariaLabel || 'Search'}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      data-testid={dataTestId}
    >
      <div
        css={[localStyles.searchWrapper, className?.searchWrapper]}
        className="pa-search-wrapper"
      >
        {showResultsCount && (
          <div
            css={[localStyles.results, className?.resultsText]}
            aria-live={resultsAriaLive}
            aria-atomic="true"
            role="status"
          >
            {resultsLabel ?? 'Total Results:'} {totalResultsCount}
          </div>
        )}

        <div css={localStyles.inputWrapper}>
          <InputField
            type="search"
            value={searchTerm || ''}
            name="searchTerm"
            labelPosition={labelPosition}
            label={label}
            placeholder={searchLabel || 'Search'}
            autoFocus={autoFocus}
            className={{ container: { ...localStyles.searchFieldContainer } }}
            onChange={setSearchTermHandler}
            size={inputSize}
            onKeyDown={hitEnter}
            onDark={onDark}
            ariaLabel={!label ? searchLabel || 'Search' : undefined}
            ariaDescribedBy={
              showResultsCount ? 'search-results-count' : undefined
            }
          />
        </div>

        {useSearchButton && (
          <Button
            dataTestId="search-submit-button"
            size={buttonSize}
            type="button"
            onClick={handleOnSearch}
            kind={buttonKind}
            ariaLabel={`${
              buttonText || 'Search'
            } - ${totalResultsCount} results available`}
            className={{
              button: {
                ...localStyles.searchButton,
                ...className?.searchButton
              }
            }}
          >
            {buttonText || 'Search'}
          </Button>
        )}
      </div>
    </div>
  );
};

const localStyles: { [key: string]: CSSObject } = {
  searchForm: {
    display: 'flex',
    width: '100%'
  },
  searchWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
    width: '100%',
    flexDirection: 'column' as const,
    [mediaQueries.minWidth.md]: {
      alignItems: 'end',
      flexDirection: 'row' as const
    }
  },
  resultsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  results: {
    alignSelf: 'end'
  },
  inputWrapper: {
    position: 'relative' as const,
    flex: 1
  },
  searchFieldContainer: {
    margin: 0,
    flex: 'initial',
    justifyContent: 'end'
  },
  searchButton: {
    whiteSpace: 'nowrap'
  }
};
