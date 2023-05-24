import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";
import { Home } from "pages/home";
import { Profile } from "pages/profile";
import { Users } from "pages/users";
import { UserProfile } from "pages/userProfile";

import "./App.css";

interface IProtectedRoute extends RouteProps {
  admin: boolean;
}

const ProtectedRoute = ({ children, admin, ...rest }: IProtectedRoute) => {
  return (
    <Route
      {...rest}
      render={({ history, location, match }) => {
        return admin ? <>{children}</> : <Redirect to="/" />;
      }}
    />
  );
};

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <button
          onClick={() => {
            setAdmin(!admin);
          }}
        >
          Admin: {`${admin}`}
        </button>
        <Switch>
          {/* use exact or move to bottom */}
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <ProtectedRoute path="/profile" exact={true} admin={admin}>
            <Profile />
          </ProtectedRoute>
          {/* <Route path="/users/:userId">
            <UserProfile />
          </Route> */}
          <Route path="/users">
            <Users />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
