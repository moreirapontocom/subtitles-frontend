import { Route, Switch } from "react-router-dom";
import AuthView from "./views/Auth.view";
import EditorView from "./views/Editor.view";
import LandingView from "./views/Landing.view";
import VideosListView from "./views/VideosList.view";
import SubmitVideoView from "./views/SubmitVideo.view";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/submit-video" component={SubmitVideoView} />
        <Route path="/videos/:videoId" component={EditorView} />
        <Route path="/videos" component={VideosListView} />
        <Route path="/auth" component={AuthView} />
        <Route path="/" component={LandingView} />
      </Switch>
    </>
  );
};

export default Routes;
