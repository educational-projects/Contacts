import { URLSearchParamsInit } from 'react-router-dom';

interface navigateOptions {
  replace?: boolean | undefined;
  state?: unknown;
}

export interface SearchFormProps {
  searchQuery: string;
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: navigateOptions
    ) => void;
}
