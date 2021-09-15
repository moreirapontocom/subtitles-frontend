import { NavLink } from "react-router-dom";
import Panel from "../views/Panel.view";
import Editor from "../components/Editor/Editor.component";

const EditorView = () => {
  return (
    <>
      <Panel
        title="Edit video subtitles"
        description="Page Description comes here"
      >
        <div className="mb-4">
          <NavLink to="/videos">&larr; voltar para Todos os Vídeos</NavLink>
        </div>
        <Editor />
      </Panel>
    </>
  );
};

export default EditorView;
