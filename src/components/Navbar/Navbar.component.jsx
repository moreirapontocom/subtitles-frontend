import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import If from "../If/If.component";
import { setUser } from "../../state/actions/user.actions";
import { useHistory } from "react-router-dom";
import "./Navbar.component.scss";

const Navbar = (props) => {
  const history = useHistory();
  const { user } = props;

  function logout() {
    props.setUser({});
    history.push("/auth");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <If condition={!user.id}>
                <li className="nav-item">
                  <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/auth" activeClassName="active" className="nav-link">Login</NavLink>
                </li>
              </If>

              <If condition={user.id}>
                <li className="nav-item">
                  <NavLink to="/videos" activeClassName="active" className="nav-link">Meus vídeos</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/submit-video" activeClassName="active" className="nav-link">Enviar vídeo</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/auth" onClick={() => logout()} className="nav-link">Sair</NavLink>
                </li>
              </If>
            </ul>
          </div>
        </div>
      </nav>
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
