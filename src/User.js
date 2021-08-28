import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}
function User() {
  const [state, refetch] = useAsync(getUsers, []);

  const { loading, data: users, error } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>occurring error!</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>Import users info</button>
    </>
  );
}

export default User;
