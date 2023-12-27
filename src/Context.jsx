import { createContext, useReducer } from "react";

export const Context = createContext();

const initState = {
  Boocking: [],
  token: null,
};

const SET_TOKEN = "setToken";

function reducer(state, action) {
  if (!action || !action.type) {
    return state;
  }

  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;