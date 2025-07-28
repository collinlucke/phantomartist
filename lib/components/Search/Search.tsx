import { InputField } from '../Form';
import { Button } from '../Buttons';
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
  setSearchTerm: (value: string) => void;
};

export const Search: React.FC<Search> = ({
  searchTerm,
  searchLabel,
  totalResultsCount,
  className,
  buttonSize,
  inputSize,
  useSearchButton,

  onSearch,
  setSearchTerm
}) => {
  const setSearchTermHandler = (value: string) => {
    setSearchTerm(value);
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    onSearch?.(e);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        css={[
          baseStyles.searchWrapper,
          className?.searchWrapper,
          searchWrapperMediaQuery
        ]}
        className="pa-search-wrapper"
      >
        <div css={baseStyles.results}>Total Results: {totalResultsCount}</div>

        <InputField
          type="search"
          value={searchTerm || ''}
          name="searchTerm"
          labelPosition="above"
          placeholder={searchLabel || 'Search'}
          className={formTextInputStyles}
          onChange={setSearchTermHandler}
          size={inputSize}
        />
        {useSearchButton && (
          <Button size={buttonSize} className={buttonStyles} type="submit">
            Search
          </Button>
        )}
      </div>
    </form>
  );
};
const searchWrapperMediaQuery = {
  '@media (max-width: 580px)': {
    flexDirection: 'column' as const
  }
};

const formTextInputStyles = {
  container: {
    margin: 0,
    flex: 1
  }
};

const buttonStyles = {
  button: {
    marginLeft: '10px'
  }
};

const baseStyles = {
  searchWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    paddingBottom: '20px',
    paddingTop: '20px',
    background: 'white'
  },
  resultsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 580px)': {
      flexDirection: 'column'
    }
  },
  results: {
    alignSelf: 'end',
    '@media (max-width: 580px)': {
      alignSelf: 'start'
    }
  }
};
