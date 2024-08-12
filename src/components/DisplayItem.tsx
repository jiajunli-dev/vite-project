import React, { ReactNode } from 'react';
import CreateItemContext, { ItemContextType } from './DisplayItemContext';

const DisplayItem: React.FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
  return (
    <CreateItemContext.Provider value={{ ItemContextType }}>
      <div>{children}</div>
    </CreateItemContext.Provider>
  );
};

export default DisplayItem;
