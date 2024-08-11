import { createContext, useContext } from "react";

type ItemProp = {
  item: string;
  info: string;
  category: string;
  price: number;
}

type ItemContextType = {
  Item: ItemProp;
};

export const Item: ItemProp = {
  item: "Ice cream machine",
  info: "Makes delicious ice cream",
  category: "Machine",
  price: 200
};

const CreateItemContext = createContext<ItemContextType>({ Item });

export const useDisplayContext = (): ItemContextType => {
  const context = useContext(CreateItemContext);

  if (!context) {
    throw new Error("useDisplayContext must be used within a CreateItemContext.Provider");
  }
  
  return context;
};

export default CreateItemContext;
