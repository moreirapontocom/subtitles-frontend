import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.component";
import "./Panel.view.scss";

function Panel(props) {
  return (
    <>
      <Navbar authenticated={true} />

      <div className="Panel">
        <div className="container">
          <h1>{props.title}</h1>
          <p>{props.description}</p>

          <div className="mb-4">
            <NavLink to="/videos">&larr; voltar para Todos os Vídeos</NavLink>
          </div>

          <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="editor-tab"
                data-bs-toggle="tab"
                data-bs-target="#editor"
                type="button"
                role="tab"
                aria-controls="editor"
                aria-selected="true"
              >
                Editor
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="settings-tab"
                data-bs-toggle="tab"
                data-bs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Settings
              </button>
            </li>
          </ul>
        </div>

        {props.children}
      </div>
    </>
  );
}

export default Panel;
