import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/users">Go to users</Link>
      <br />
      <Link to="/profile">Go to profile</Link>
    </div>
  );
};
