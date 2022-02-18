import React from "react";
import User from "../components/User";

const Users = ({ users }) => {
  return (
    <>
      <h1>Users List</h1>
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </>
  );
};

export default Users;

export const getStaticProps = async () => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await result.json();

  return {
    props: {
      users: data,
    },
  };
};
