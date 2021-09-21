import { connect } from "react-redux";
import { setUser } from "./../state/actions/user.actions";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { login as doLogin } from "../services/users.service";

const AuthView = (props) => {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function login() {
    const user = await doLogin({ email, password });
    props.setUser(user);
    history.push("/videos");
  }

  return (
    <>
      <div className="container">
        <div className="row vh-100 vh-100 mx-auto align-items-center justify-content-center">
          <div className="col-12 col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2>Login</h2>
                <p>Descrição da página de login</p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      id="password"
                      autoComplete="off"
                      className="form-control"
                    />
                  </div>
                  <button
                    disabled={!email || !password}
                    onClick={() => login()}
                    type="button"
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-4">
              <NavLink to="/" className="btn btn-link">
                &larr; voltar para a home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToPro)(AuthView);
