import { FormTextInput, Form } from '../FormElements';
import { Button } from '../Buttons';
import * as stylex from '@stylexjs/stylex';
import { ChangeEvent } from 'react';

type Search = {
  searchTerm?: string;
  searchLabel?: string;
  resultsCount?: number;

  onSearch?: React.FormEventHandler<HTMLFormElement>;
  setSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Search: React.FC<Search> = ({
  searchTerm,
  searchLabel,
  resultsCount,
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
    <div {...stylex.props(baseStyles.searchWrapper)}>
      <div>Results: {resultsCount}</div>
      <Form className={baseStyles} onSubmit={onSearchHandler}>
        <FormTextInput
          type="search"
          value={searchTerm}
          name="searchTerm"
          labelPos="above"
          label={searchLabel || 'Search'}
          className={baseStyles}
          onChange={setSearchTermHandler}
        />
        <Button className={{ button: baseStyles.button }} type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

const baseStyles = stylex.create({
  searchWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    marginBottom: '20px'
  },
  formWrapper: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'flex-end',
    flexWrap: 'wrap',

    // Kill Form defaults
    backgroundColor: 'transparent',
    padding: '0'
  },
  button: {
    marginLeft: '10px'
  },
  inputWrapper: {
    margin: 0
  }
});
