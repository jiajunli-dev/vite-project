import React from "react";
import { useDisplayContext } from "./DisplayItemContext";

const Toy: React.FC = (): JSX.Element => {
  const { ItemContextType } = useDisplayContext();
  
  return (
    <div>
      <h1>Toy:</h1>
      <p>Lego bozooo 3000</p>
      <p>Price: {ItemContextType.toyPrice}</p>
    </div>
  )
};

export default Toy;
