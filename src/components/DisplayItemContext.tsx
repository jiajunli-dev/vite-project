import { createContext, useContext } from "react";

type ItemProp = {
  carPrice: number;
  toyPrice: number;
  phonePrice: number;
}

export const ItemContextType: ItemProp = {
  carPrice: 10000,
  toyPrice: 100,
  phonePrice: 1000
};

// const CreateItemContext = createContext<ItemContextType>({ Item });
const CreateItemContext = createContext<{ ItemContextType: ItemProp } | undefined>(undefined);


export const useDisplayContext = (): { ItemContextType: ItemProp }  => {
  const context = useContext(CreateItemContext);

  if (!context) {
    throw new Error("useDisplayContext must be used within a CreateItemContext.Provider");
  }
  
  return context;
};

export default CreateItemContext;
