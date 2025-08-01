import { InputField } from '../Form';
import { Button } from '../Buttons';
import { mediaQueries } from '../../styling/baseTheme';
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

  const handleFormSubmit = () => {
    onSearch?.(searchTerm);
  };

  const hitEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleFormSubmit();
    }
  };
  console.log(buttonKind);
  return (
    <div
      // onSubmit={handleFormSubmit}
      css={[localStyles.searchForm, className?.searchForm]}
      className="pa-search-form"
    >
      <div
        css={[localStyles.searchWrapper, className?.searchWrapper]}
        className="pa-search-wrapper"
      >
        {showResultsCount && (
          <div css={[localStyles.results, className?.resultsText]}>
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
            className={{ container: { ...localStyles.searchFieldContainer } }}
            onChange={setSearchTermHandler}
            size={inputSize}
            onKeyDown={hitEnter}
            onDark={onDark}
          />
        </div>

        <Button
          data-testid="search-submit-button"
          size={buttonSize}
          type="button"
          onClick={handleFormSubmit}
          kind={buttonKind}
          className={{ button: localStyles.searchButton }}
        >
          {buttonText || 'Search'}
        </Button>
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
    flex: 1,
    [mediaQueries.minWidth.sm]: {
      // alignItems: 'end'
    }
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
