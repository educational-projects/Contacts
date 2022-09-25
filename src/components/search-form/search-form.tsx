import React, { ChangeEvent, useState } from 'react';
import { APIQuery } from '../../const';
import styles from './search-form.module.scss';
import { SearchFormProps } from './search-form.props';

export function SearchForm({ searchQuery, setSearchParams }: SearchFormProps): JSX.Element {
  const [searchForm, setSearchForm] = useState(searchQuery);

  const handleSearchChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;

    if (value) {
      setSearchParams(
        {
          [APIQuery.FullText]: value,
        },
      );
    } else {
      setSearchParams({});
    }

    setSearchForm(value);
  };

  return (
    <div className={styles.search}>
      <form autoComplete="off">
        <label className="visually-hidden" htmlFor="search">Поиск</label>
        <input
          className={styles.input}
          type="search"
          value={searchForm}
          onChange={handleSearchChange}
          placeholder="Поиск"
          id="search"
        />
      </form>
    </div>
  );
}
