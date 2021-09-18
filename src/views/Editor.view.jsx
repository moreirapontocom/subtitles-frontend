import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.component";
import PageHeader from "./../components/PageHeader/PageHeader.component";
import Editor from "../components/Editor/Editor.component";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVideoById, removeVideoById } from "../services/videos.service";
import If from "../components/If/If.component";

const EditorView = () => {
  const history = useHistory();
  const { videoId } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    getVideo(videoId);
  }, [videoId]);

  async function getVideo(videoId) {
    const item = await getVideoById(videoId);
    setVideo(item);
  }

  async function removeVideo(videoId) {
    await removeVideoById(videoId);
    history.push("/videos");
  }

  return (
    <>
      <Navbar authenticated={true} />

      <div className="PageHeader with-tabs">
        <PageHeader title={video.titulo} description={video.description} />

        <div className="container">
          <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
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
      </div>


      <div className="PageContent">
        <div className="container">
          <If condition={video}>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane show active" id="editor" role="tabpanel" aria-labelledby="editor-tab">
                <Editor video={video} />
              </div>
              <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
              <button onClick={() => removeVideo(video.id)} type="button" className="btn btn-outline-danger">Remove Video</button>
              </div>
            </div>
          </If>
        </div>
      </div>
    </>
  );
};

export default EditorView;
