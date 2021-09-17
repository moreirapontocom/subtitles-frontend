import { NavLink } from "react-router-dom";
import Panel from "../views/Panel.view";
import Editor from "../components/Editor/Editor.component";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVideoById } from "../services/videos.service";

const EditorView = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    getVideo(videoId);
  }, [videoId]);

  async function getVideo(videoId) {
    const item = await getVideoById(videoId);
    setVideo(item);
  }

  return (
    <>
      <Panel title={video.titulo} description={video.description}>
        <div className="mb-4">
          <NavLink to="/videos">&larr; voltar para Todos os Vídeos</NavLink>
        </div>
        {video && <Editor video={video} />}
      </Panel>
    </>
  );
};

export default EditorView;
