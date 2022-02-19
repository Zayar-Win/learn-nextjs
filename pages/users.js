const UserList = ({ name }) => {
  return <h1>{name.name}</h1>;
};

export default UserList;

export const getServerSideProps = async () => {
  const response = await fetch(
    "http://localhost:3000/api"
  );
  const data = await response.json();

  return {
    props: {
      name: data,
    },
  };
};
