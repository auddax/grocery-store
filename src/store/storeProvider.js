import { createContext } from "react";
import rootStore from "./rootStore";

export const StoreContext = createContext(rootStore);

export const StoreProvider = ({ children }) => {

  return(
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  )
}
