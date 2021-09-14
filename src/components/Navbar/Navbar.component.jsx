import { Link } from "react-router-dom";
import { connect } from "react-redux";

import If from '../If/If.component';
// import Auth from "../Auth/Auth";

const Navbar = (props) => {
  const { user } = props
  return (
    <>
      <ul>
          <If condition={!props.user.id}>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/auth">Login</Link>
              </li>
          </If>

          <If condition={props.user.id}>
              <li>
                  <Link to="/videos">Início</Link>
              </li>
              <li>
                  <Link to="/submitVideo">Enviar vídeo</Link>
              </li>
              <li>
                  <Link to="/auth">Sair</Link>
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
      email: state.user.email
    }
  }
}

export default connect(mapStateToProps)(Navbar);
