import { NavLink } from "react-router-dom";
import If from "../If/If.component";
import { useHistory } from "react-router-dom";
import "./Navbar.component.scss";
import Acronym from "../Acronym/Acronym.component";
import { useEffect, useState } from "react";
import Auth from "./../../services/auth.service";

const Navbar = (props) => {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = Auth.getUser();
    setUser(userData);
  }, []);

  function logout() {
    setUser(null);
    Auth.logout();
    history.push("/auth");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <If condition={!user}>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/auth"
                    activeClassName="active"
                    className="nav-link"
                  >
                    Login
                  </NavLink>
                </li>
              </If>

              <If condition={user && user.id}>
                <li className="nav-item">
                  <NavLink
                    to="/videos"
                    activeClassName="active"
                    className="nav-link"
                  >
                    <i className="fas fa-list me-2"></i> Videos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/auth"
                    onClick={() => logout()}
                    className="nav-link"
                  >
                    <i className="fas fa-sign-out-alt me-2"></i> Sair
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    activeClassName="active"
                    className="nav-link"
                  >
                    <Acronym
                      hide
                      name={[user.first_name, user.last_name].join(" ")}
                    />
                  </NavLink>
                </li>
              </If>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
