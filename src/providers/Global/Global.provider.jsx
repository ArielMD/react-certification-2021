import React, { useState } from 'react';

const GlobalContext = React.createContext(null);

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <GlobalContext.Provider value={{ search, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider as default };
