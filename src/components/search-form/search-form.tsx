import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { APIQuery, AppRoute } from '../../const';
import { useAppDispatch } from '../../hook';
import { fetchContacts } from '../../store/contacts/contacts';
import styles from './search-form.module.scss';

export function SearchForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get(APIQuery.FullText) || '';

  const [searchForm, setSearchForm] = useState(searchQuery);

  const handleSearchChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;

    if (value) {
      setSearchParams(
        { [APIQuery.FullText]: value },
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
          type="text"
          value={searchForm}
          onChange={handleSearchChange}
          placeholder="Поиск"
          id="search"
        />
      </form>
    </div>
  );
}
// export function SearchForm(): JSX.Element {
//   const dispatch = useAppDispatch();
//   const { search } = useLocation();
//   const navigate = useNavigate();
//   const [searchForm, setSearchForm] = useState('');

//   const urlParams = new URLSearchParams(search);

//   const searchParams = urlParams.get(APIQuery.FullText);

//   useEffect(() => {
//     if (searchParams) {
//       setSearchForm(searchParams);
//     }
//   }, [searchParams]);

//   const debouncedSearchChange = useDebouncedCallback((
//     { target }: ChangeEvent<HTMLInputElement>,
//   ): void => {
//     const { value } = target;

//     setSearchForm(value);

//     if (value) {
//       navigate({
//         pathname: AppRoute.Contacts,
//         search: createSearchParams({
//           [APIQuery.FullText]: value,
//         }).toString(),
//       });
//     } else {
//       navigate(AppRoute.Contacts);
//       dispatch(fetchContacts());
//     }
//   }, 800);

//   const handleSearchChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
//     const { value } = target;
//     setSearchForm(value);
//   };

//   return (
//     <div className={styles.search}>
//       <form>
//         <label className="visually-hidden" htmlFor="search">Поиск</label>
//         <input
//           className={styles.input}
//           type="text"
//           value={searchForm}
//           onChange={handleSearchChange}
//           placeholder="Поиск"
//           id="search"
//         />
//       </form>
//     </div>
//   );
// }
