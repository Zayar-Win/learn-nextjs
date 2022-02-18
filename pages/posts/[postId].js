import React from "react";
import { useRouter } from "next/router";

const PostDetail = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    //if you set fallback to true u should check fallback to show loading indicator
    return <h1>Loading...</h1>; //if you set fallback to true ur route is don't have in pre-render pages
    //it will not show to 404 page it will fetch data with fallback serve
  }
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
  if (!data.id) {
    //to show 404 page when fallback is true
    return {
      notFound: true,
    };
  }

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
    fallback: true,
  };
};
