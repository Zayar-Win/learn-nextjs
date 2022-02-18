import useSWR from "swr";

const fetcher = async () => {
  const result = await fetch(
    "http://localhost:4000/dashboard"
  );
  const data = await result.json();

  return data;
};

const Dashboard = () => {
  const { data, error } = useSWR(
    "dashboard",
    fetcher
  );
  if (error) return "An error occured";
  if (!data) return <h2>Loading...</h2>;
  if (data) {
    return (
      <div>
        <h2>Dashboard</h2>
        <h3>Posts {data.posts}</h3>
        <h3>Likes {data.likes}</h3>
        <h3>Followers {data.followers}</h3>
        <h3>Following {data.following}</h3>
      </div>
    );
  }
};
export default Dashboard;
