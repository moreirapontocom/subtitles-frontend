import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const RoutePrivate = ({ component: PrivateComponent, ...rest }) => {
  const { access_token } = rest.user;

  return (
    <Route
      {...rest}
      render={(props) =>
        access_token ? (
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
