import React from "react";

const PostDetail = ({ post }) => {
  //if you set fallback to blocking it will not have fallback/loading  flash state like set true
  //nextjs team recommand to use true
  return (
    <>
      <h1>Post {post.id} Detail</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
};

export default PostDetail;

export const getStaticProps = async (context) => {
  const { params } = context;
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await result.json();

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = await result.json();

  return {
    paths: data.slice(0, 5).map((post) => {
      return {
        params: {
          postId: post.id.toString(),
        },
      };
    }),
    fallback: "blocking",
  };
};
