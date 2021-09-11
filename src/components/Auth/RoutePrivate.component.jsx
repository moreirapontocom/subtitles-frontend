import { Route, Redirect } from "react-router-dom";

import Auth from "./Auth";

const RoutePrivate = ({ component: PrivateComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.isAuthenticated() ? (
          <PrivateComponent {...props} />
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  );
};

export default RoutePrivate;
