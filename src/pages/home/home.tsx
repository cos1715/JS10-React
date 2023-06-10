import { Link } from "react-router-dom";
import { useAuthContext } from "providers/auth";
import { useProfileQuery } from "store/profile/query";
import { ROUTES } from "routes/const";

export const Home = () => {
  const { username } = useAuthContext();
  const { data } = useProfileQuery(username, !!username);

  console.log(data);

  return (
    <div>
      {!username ? (
        <div>
          <p>Please Login first</p>
          <Link to={ROUTES.login}>Go to Login</Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
