import { FormTextInput, Form } from '../FormElements';
import { Button } from '../Buttons';
import { ChangeEvent } from 'react';
import { CSSObject } from '@emotion/react';

type Search = {
  searchTerm?: string | number;
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
  const onSearchHandler: React.FormEventHandler<HTMLFormElement> = e => {
    onSearch?.(e);
  };
  const setSearchTermHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e);
  };

  return (
    <div
      css={[
        baseStyles.searchWrapper,
        className?.searchWrapper,
        searchWrapperMediaQuery
      ]}
      className="pa-search-wrapper"
    >
      <div css={baseStyles.results}>Total Results: {totalResultsCount}</div>

      <Form className={formStyles} onSubmit={onSearchHandler} role="search">
        <FormTextInput
          type="search"
          value={searchTerm}
          name="searchTerm"
          labelPos="above"
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
      </Form>
    </div>
  );
};

const searchWrapperMediaQuery = {
  '@media (max-width: 580px)': {
    flexDirection: 'column' as const
  }
};

const formTextInputStyles = {
  inputWrapper: {
    margin: 0,
    flex: 1
  }
};

const formStyles = {
  form: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'flex-end',
    flexWrap: 'wrap' as const,
    width: 'inherit',
    border: 'none',
    '@media (max-width: 580px)': {
      width: '100%'
    },

    // Kill Form defaults
    backgroundColor: 'transparent',
    padding: '0'
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
