import { connect } from "react-redux";
import { setUser } from "./../../state/actions/user.actions";
import If from "../If/If.component";

const LoginForm = (props) => {
  const { user } = props;

  function login() {
    props.setUser({
      id: 1,
      name: 'Lucas Moreira',
      email: 'moreirapontocom@gmail.com'
    })
  }

  function logout() {
    props.setUser({});
  }

  return (
    <>
      <If condition={user.id}>
        Você está logado como <strong>{user.name}</strong>
        <br />
        <button onClick={() => console.log("Nada por enquanto")} type="button">
          Continuar
        </button>
        <button onClick={() => logout()} type="button">
          Sair
        </button>
      </If>

      <If condition={!user.id}>
        Form de login aqui
        <button onClick={() => login()} type="button">
          Login
        </button>
      </If>
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
