import { useLocation } from 'react-router-dom';

const useQuery = () => {
  const query = new URLSearchParams(useLocation().search);

  const querySearch = query.get('q');

  const queryId = query.get('id');

  return { querySearch, queryId };
};

export default useQuery;
