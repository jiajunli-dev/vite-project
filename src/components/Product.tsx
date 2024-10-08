import React from "react";
import { useDisplayContext } from "./DisplayItemContext";

const Product: React.FC = (): JSX.Element => {
  const { ItemContextType } = useDisplayContext();
  
  return (
    <div>
      <h1>Product:</h1>
      <p>Cucumber slicer 2000x pro x large</p>
      <p>Price: {ItemContextType.toyPrice}</p>
    </div>
  )
};

export default Product;
