import { createContext } from "react";
import { useReducer } from "react";

import { typeDefaultAction,typeThemeInitialState } from "../types/typesReducer"; 
import { ThemeReducer, themeInitialState } from "../reducers/themeReducer";

type InitialStateType = {
    theme : typeThemeInitialState;
}

type ContextType ={
    state :InitialStateType;
    dispatch : React.Dispatch<any>;
}

const InitialState : InitialStateType = {
    theme : themeInitialState
}

export const Context = createContext<ContextType>({
    state : InitialState,
    dispatch : () => null
})

const mainReducer = (state:InitialStateType, action:typeDefaultAction)=>({
    theme:ThemeReducer(state.theme,action)
})

export const ContextProvider = ({children}:React.PropsWithChildren)=>{
    const [state,dispatch] = useReducer(mainReducer,InitialState)
   
    return(
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}