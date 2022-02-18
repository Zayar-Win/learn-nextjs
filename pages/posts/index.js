import React from "react";
import Link from "next/link";

const PostsList = ({ posts }) => {
  return (
    <>
      <h1>PostsList</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PostsList;

export const getStaticProps = async () => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = await result.json();

  return {
    props: {
      posts: data,
    },
  };
};
