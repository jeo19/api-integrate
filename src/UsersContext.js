import React, { createContext, useContext, useReducer } from "react";
import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState,
} from "./asyncActionUtils";
import * as api from "./api";

const initialState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

//Wrapping the provider tag for use the state and dispatch values with global

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}
// Declared the custom hook for easy use the State value
export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error(`Can not find UsersProvider`);
  }
  return state;
}
//Declared the custom hook for easy use the dispatch function
export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error("Can not find UsersProvider");
  }
  return dispatch;
}

export const getUsers = createAsyncDispatcher("GET_USERS", api.getUsers);
export const getUser = createAsyncDispatcher("GET_USER", api.getUser);

function UsersContext() {
  return <div>Hello React!</div>;
}

export default UsersContext;
