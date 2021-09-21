import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const RoutePrivate = ({ component: PrivateComponent, ...rest }) => {
  const { id } = rest.user;
  return (
    <Route
      {...rest}
      render={(props) =>
        id ? (
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
      id: state.user.id
    },
  };
}

export default connect(mapStateToProps)(RoutePrivate);
