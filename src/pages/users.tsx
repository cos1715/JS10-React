import {
  NavLink,
  Link,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { UserProfile } from "./userProfile";

export const users = [
  { id: "1", name: "Taras", age: 12 },
  { id: "2", name: "Andrii", age: 12 },
  { id: "3", name: "Julia", age: 12 },
  { id: "4", name: "Oleksandra", age: 12 },
];

export const Users = () => {
  const location = useLocation();
  const routeMatch = useRouteMatch();
  // console.log("location", location);
  // console.log("routeMatch", routeMatch);

  return (
    <div>
      <Link to="/">Go home</Link>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <NavLink
                activeStyle={{ color: "gray" }}
                activeClassName=""
                to={{
                  pathname: `/users/${user.id}`,
                  search: "admin=true",
                  state: { adminSate: true },
                }}
              >
                {user.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route path={`${routeMatch.path}/:userId`}>
          <UserProfile />
        </Route>

        <Route path="/products/:id" />
        <Route path="/products" exact={true} />
      </Switch>
    </div>
  );
};
