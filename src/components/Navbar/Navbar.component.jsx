// import If from '../If/If.component';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Auth from "../Auth/Auth";

const Navbar = (props) => {
  console.log('PROPS DA NAVBAR >>>> ', props)
  return (
    <>
      <ul>
        {/*
            Isso está comentado pois ainda não está atualizando o status da aplicação
            Seria alguma coisa como mandar as mensagens no Angular
            <If condition={!Auth.isAuthenticated()}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/auth">Login</Link>
                </li>
            </If>

            <If condition={Auth.isAuthenticated()}>
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
            */}

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Login</Link>
        </li>
        <li>
          <Link to="/videos">Meus Vídeos</Link>
        </li>
        <li>
          <Link to="/videos/submit">Enviar vídeo</Link>
        </li>
        <li>
          <Link onClick={() => Auth.logout()} to="/auth">
            Sair
          </Link>
        </li>
      </ul>
    </>
  );
};

function mapStateToProps(state) {
  return {
    id: state.user.id,
    name: state.user.name,
    email: state.user.email,
  }
}

export default connect(mapStateToProps)(Navbar);
