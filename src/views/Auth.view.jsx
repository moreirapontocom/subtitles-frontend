// import { connect } from "react-redux";
// import { setUser } from "./../state/actions/user.actions";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { login as doLogin, getUserData } from "../services/users.service";
import If from "./../components/If/If.component";
import Auth from "./../services/auth.service";

const AuthView = (props) => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    Auth.clearUser();
    checkRemember();
  }, []);

  function checkRemember() {
    const sto = localStorage.getItem("remember");
    if (sto) {
      setEmail(sto);
      setRemember(true);
    }
  }

  async function login() {
    remember
      ? localStorage.setItem("remember", email)
      : localStorage.removeItem("remember");

    setErrors([]);

    const userAuth = await doLogin({ email, password });
    if (userAuth.errors) {
      setErrors(userAuth.errors);
    } else {
      const userData = await getUserData(userAuth.data.access_token);
      const user = { ...userAuth.data, ...userData.data};
      Auth.setUser(user);
      history.push("/videos");
    }
  }

  function mapErrors(errors) {
    return errors.map((error, index) => {
      return (
        <>
          <li key={index}>
            <i className="fas fa-times me-2"></i> {error.message}
          </li>
        </>
      );
    });
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
                <If condition={errors && errors.length >= 0}>
                  <ul className="list-unstyled text-danger">
                    {mapErrors(errors)}
                  </ul>
                </If>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      defaultValue={email}
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
                  <div className="mb-3">
                    <label>
                      <input
                        onChange={() => {
                          setRemember(!remember);
                        }}
                        checked={remember}
                        className="form-check-input me-2"
                        type="checkbox"
                      />
                      Remember me
                    </label>
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

export default AuthView;
