import {
  getSession,
  useSession,
} from "next-auth/react";

function Blog({ data }) {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <h1>
      Blog List - {data} {session?.user.name}
    </h1>
  );
}

export default Blog;

export const getServerSideProps = async (
  context
) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session
        ? "list of 100 personize blogs"
        : "list of free blogs",
    },
  };
};
