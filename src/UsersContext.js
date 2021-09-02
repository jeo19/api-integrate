import React from "react";

const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};
//State when loading
const loadingState = {
  loading: true,
  data: null,
  error: null,
};
//State function when success
const success = (data) => ({
  loading: false,
  data,
  error: null,
});
//State function when error
const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

function usersReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: loadingState,
      };
    default:
      throw new Error(`Unhandled action type:${action.type}`);
  }
}

function UsersContext() {
  return <div>Hello React!</div>;
}

export default UsersContext;
