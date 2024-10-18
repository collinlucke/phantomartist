import { FormTextInput, Form } from '../FormElements';
import { Button } from '../Buttons';
import { ChangeEvent } from 'react';
import { CSSObject } from '@emotion/react';

type Search = {
  searchTerm?: string;
  searchLabel?: string;
  resultsCount?: number;
  buttonSize?: 'large' | 'medium' | 'small';
  inputSize?: 'large' | 'medium' | 'small';
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
  resultsCount,
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
      css={[baseStyles.searchWrapper, className?.searchWrapper]}
      className="pa-search-wrapper"
    >
      <div css={baseStyles.results}>Results: {resultsCount}</div>
      <Form className={baseStyles} onSubmit={onSearchHandler} role="search">
        <FormTextInput
          type="search"
          value={searchTerm}
          name="searchTerm"
          labelPos="above"
          placeholder={searchLabel || 'Search'}
          className={baseStyles}
          onChange={setSearchTermHandler}
          size={inputSize}
        />
        {useSearchButton && (
          <Button
            size={buttonSize}
            className={{ button: baseStyles.button }}
            type="submit"
          >
            Search
          </Button>
        )}
      </Form>
    </div>
  );
};

const baseStyles = {
  searchWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    marginBottom: '20px',
    '@media (max-width: 580px)': {
      flexDirection: 'column' as 'column'
    }
  },
  results: {
    alignSelf: 'end',
    '@media (max-width: 580px)': {
      alignSelf: 'start'
    }
  },
  form: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'flex-end',
    flexWrap: 'wrap' as 'wrap',
    width: 'inherit',
    border: 'none',
    '@media (max-width: 580px)': {
      width: '100%'
    },

    // Kill Form defaults
    backgroundColor: 'transparent',
    padding: '0'
  },
  button: {
    marginLeft: '10px'
  },
  inputWrapper: {
    margin: 0,
    flex: 1
  }
};
