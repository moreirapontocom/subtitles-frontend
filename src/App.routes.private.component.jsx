import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "./services/auth.service";

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

function mapStateToProps(state) {
  return {
    user: {
      access_token: state.user.access_token
    },
  };
}

export default connect(mapStateToProps)(RoutePrivate);
