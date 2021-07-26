import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document
      .getElementById('main-container')
      .addEventListener('mousedown', handleClickOutside);

    return () => {
      document
        .getElementById('main-container')
        .removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useClickOutside;
