import React, { ReactNode } from 'react';
import useContextProvider from './ContextProvider';

export const Button: React.FC = (): JSX.Element => {
  const { setIsOpen } = useContextProvider();

  return (
    <button onClick={() => setIsOpen((t) => !t)}>Toggle</button>
  );
};

export const DisplayList: React.FC<{children: ReactNode}> = ({children}): JSX.Element => {
  const { isOpen } = useContextProvider();

  return <div>{isOpen && children}</div>;
};
