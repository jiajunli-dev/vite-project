import React from "react";
import CreateItemContext, { Item } from "./DisplayItemContext";
import Product from "./Product";

const DisplayItem: React.FC = (): JSX.Element => {
  return (
    <CreateItemContext.Provider value={{Item}}>
      <div>
        <Product />
      </div>
    </CreateItemContext.Provider>
  )
};

export default DisplayItem;
