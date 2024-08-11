import React from "react";
import { useDisplayContext } from "./DisplayItemContext";

const Product: React.FC = (): JSX.Element => {
  const { Item } = useDisplayContext();
  
  return (
    <div>
      <h1>{Item.item}</h1>
      <p>{Item.info}</p>
      <p>{Item.category}</p>
      <p>{Item.price}</p>
    </div>
  )
};

export default Product;
