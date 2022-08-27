import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

export const AppContext = createContext();
export const initState={
    isAuth:false,
    data:[],
    isLoading: false,
    isError:false,
    isDataLoading:false
}


export function AppContextProvider({ children }) {
    const [state, dispatch]=useReducer(Reducer, initState)

  return <AppContext.Provider value={{dispatch, state}}>{children}</AppContext.Provider>;
}

