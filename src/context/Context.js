import { createContext,useEffect,useReducer } from "react";
import { Reducer } from "react";

const INNITIAL_STATE = {
    user:JSON.parse(localStorage.getItem('user')),
    error:false,
}

export const Context = createContext(INNITIAL_STATE)

export const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(Reducer,INNITIAL_STATE)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    },[state.user])

    return (
    <Context.Provider value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch,
    }}>
        {children}
    </Context.Provider>
    )
}