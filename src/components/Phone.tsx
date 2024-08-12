import React from "react";
import { useDisplayContext } from "./DisplayItemContext";

const Phone: React.FC = (): JSX.Element => {
  const { ItemContextType } = useDisplayContext();
  
  return (
    <div>
      <h1>Phone:</h1>
      <p>Ihpone 2000</p>
      <p>Price: {ItemContextType.phonePrice}</p>
    </div>
  )
};

export default Phone;
