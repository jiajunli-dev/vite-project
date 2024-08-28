import React, { ReactNode, useState } from 'react';
import { myContext } from './ContextProvider';
import { Button, DisplayList } from './Dropdown';
import Item from './Item';

interface FlyoutType extends React.FC<{ children: ReactNode }> {
  Button: typeof Button;
  DisplayList: typeof DisplayList;
  Item: typeof Item;
}

const Flyout: FlyoutType = ({children}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <myContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </myContext.Provider>
  );
};

Flyout.Button = Button;
Flyout.DisplayList = DisplayList;
Flyout.Item = Item;

export default Flyout;
