import React, { createContext, useContext } from 'react';

type MyContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const myContext = createContext<MyContextType | undefined>(undefined);

const useContextProvider = (): MyContextType => {
  const context = useContext(myContext);

  if (!context) {
    throw new Error('useContextProvider must be used within a ContextProvider');
  }

  return context;
};

export default useContextProvider;
