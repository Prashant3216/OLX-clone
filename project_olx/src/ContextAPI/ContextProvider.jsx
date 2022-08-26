import { createContext, useReducer } from "react";

export const AppContext = createContext();
export const initState={
    isAuth:"false"
}


export function AppContextProvider({ children }) {
    const [state, dispatch]=useReducer(Reducer, initState)

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

