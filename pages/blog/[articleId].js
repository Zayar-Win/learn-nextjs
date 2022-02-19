import Head from "next/head";

const Blog = ({ title, description }) => {
  return (
    <>
      {/* In head component u can menage the element in html head.
       */}
      <Head>
        <title>{title}</title>
        <meta
          name='descripton'
          content={description}
        ></meta>
      </Head>
      <h1>{description}</h1>
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  return {
    props: {
      title: "First Article",
      description: "This is description",
    },
  };
};
