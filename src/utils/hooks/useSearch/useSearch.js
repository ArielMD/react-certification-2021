import { useContext } from 'react';
import { GlobalContext } from '../../../providers/Global';

const useSearch = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without an GlobalProvider!`);
  }
  const { search, setSearch } = context;

  return { search, setSearch };
};

export default useSearch;
