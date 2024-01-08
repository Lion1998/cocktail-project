import { createContext, useReducer } from "react";

export const Context = createContext();

const initState = localStorage.getItem("state")? JSON.parse(localStorage.getItem("state")) :{
  token: null,
  user: null
};

const SET_TOKEN = "setToken";

function reducer(state, action) {
  if (!action || !action.type) {
    return state;
  }

  switch (action.type) {
    case SET_TOKEN:
      localStorage.setItem("state", JSON.stringify({
        token: action.payload.token,
        user: action.payload.user
      }));
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      };
    case "logout":
      localStorage.removeItem("state");
      return {
        ...state,
        token: null,
        user: null
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

export default Provider;