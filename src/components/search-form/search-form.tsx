import React, { FormEvent } from 'react';
import { useAppDispatch } from '../../hook';
import styles from './search-form.module.scss';

export function SearchForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    console.log('ds');
  };

  return (
    <div className={styles.search}>
      <form>
        <label className="visually-hidden" htmlFor="search">Поиск</label>
        <input className={styles.input} type="text" placeholder="Поиск" id="search" />
      </form>
    </div>
  );
}
