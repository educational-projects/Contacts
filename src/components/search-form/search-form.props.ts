import { URLSearchParamsInit } from 'react-router-dom';

export interface SearchFormProps {
  searchQuery: string;
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean | undefined; state?: unknown; } | undefined
    ) => void;
}
