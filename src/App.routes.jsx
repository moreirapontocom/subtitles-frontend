import { Route, Switch } from "react-router-dom";

import AuthView from "./views/Auth.view";
import EditorView from "./views/Editor.view";
import LandingView from "./views/Landing.view";
import VideosListView from "./views/VideosList.view";
import SubmitVideoView from "./views/SubmitVideo.view";
import RoutePrivate from "./components/Auth/RoutePrivate.component";

const Routes = () => {
  // <SubmitVideo onVideoSubmit={newVideoHasBeenSubmited}></SubmitVideo>

  return (
    <>
      <Switch>
        <Route path="/auth" component={AuthView} />
        <RoutePrivate path="/videos/submit" component={SubmitVideoView} />
        <RoutePrivate path="/videos/:videoId" component={EditorView} />
        <RoutePrivate path="/videos" component={VideosListView} />
        <Route path="/" component={LandingView} />
      </Switch>
    </>
  );
};

export default Routes;
