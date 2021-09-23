import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const RoutePrivate = ({ component: PrivateComponent, ...rest }) => {
  const { id } = rest.user;

  // const user = localStorage.getItem("user");
  // if (user) {
  //   console.log(JSON.parse(user));
  // } else {
  //   console.log(false);
  // }

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
