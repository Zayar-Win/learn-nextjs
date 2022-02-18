import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href='/users'>
        <a>Users</a>
      </Link>
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
    </>
  );
};

export default Home;
