import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import If from "../If/If.component";
import { setUser } from "../../state/actions/user.actions";
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {
  const history = useHistory();
  const { user } = props;

  function logout() {
    props.setUser({});
    history.push('/auth');
  }

  return (
    <>
      <ul>
        <If condition={!user.id}>
          <li>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/auth" activeClassName="active">Login</NavLink>
          </li>
        </If>

        <If condition={user.id}>
          <li>
            <NavLink to="/videos" activeClassName="active">Meus vídeos</NavLink>
          </li>
          <li>
            <NavLink to="/videos/submit" activeClassName="active">Enviar vídeo</NavLink>
          </li>
          <li>
            <button onClick={() => logout()} type="button">Sair</button>
          </li>
        </If>
      </ul>
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

function mapDispatchToProp(dispatch) {
  return {
    setUser(user) {
      const action = setUser(user);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(Navbar);
