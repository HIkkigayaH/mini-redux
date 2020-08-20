import React, { useReducer, createContext } from "react"
import { SET_NAME } from "./Constants";

const initialState = {
    name: '',
    theme: {
        colors: {
            text: 'white',
            primary: 'white',
            accent: 'white',
            placeholder: 'white'
        }
    }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

  case SET_NAME:
    return { ...state, ...action.payload };

  default:
    return state
  }
};

export const MyContext = createContext({
    state: undefined,
    dispatch: undefined
})

export function Provider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <MyContext.Provider value={{state: state, dispatch: dispatch}}>
            {children}
        </MyContext.Provider>
    );
}