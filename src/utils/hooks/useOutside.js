import { useEffect } from 'react';

const useOutside = (searchRef, showRef, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth > 992) return;

      const eventsearch = searchRef.current && !searchRef.current.contains(event.target);
      const eventShow = showRef.current && !showRef.current.contains(event.target);

      const shouldChangeState = eventsearch && eventShow;

      if (!shouldChangeState) return;

      callback();
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useOutside;
