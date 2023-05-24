import { useLocation, useParams, useHistory } from "react-router-dom";
import { users } from "./users";

export const UserProfile = () => {
  const location = useLocation();
  const history = useHistory();
  const params = useParams<any>();
  const user = users.find((user) => {
    return user.id === params.userId;
  });

  console.log("location", location);
  // console.log("params", params);
  // console.log("history", history);

  return (
    <div>
      <h3>{user?.name}</h3>
      <h4>{user?.age}</h4>

      <button onClick={history.goBack}>Go back</button>
      <button onClick={history.goForward}>Go Forward</button>
      {/* <button onClick={() => history.go(-1)}>Go to</button> */}
      <button onClick={() => history.push("/users")}>Go push</button>
      <button
        onClick={() => {
          history.replace("/users");
        }}
      >
        Go replace
      </button>
    </div>
  );
};
