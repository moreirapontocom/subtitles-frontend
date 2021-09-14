import { connect } from "react-redux";
import { setUser } from "./../../state/actions/user.actions";
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {
  const history = useHistory();

  function login() {
    props.setUser({
      id: 1,
      name: "Lucas Moreira",
      email: "moreirapontocom@gmail.com",
    });
    history.push("/videos");
  }

  return (
    <>
      Form de login aqui
      <button onClick={() => login()} type="button">
        Login
      </button>
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: {
      id: state.user.id,
      name: state.user.name,
      email: state.user.email,
    },
  };
}

function mapDispatchToPro(dispatch) {
  return {
    setUser(user) {
      const action = setUser(user);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToPro)(LoginForm);
