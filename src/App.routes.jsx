import { Route, Switch } from "react-router-dom";
import AuthView from "./views/Auth.view";
import EditorView from "./views/Editor.view";
import LandingView from "./views/Landing.view";
import ProfileView from "./views/Profile.view";
import VideosListView from "./views/VideosList.view";
import SubmitVideoView from "./views/SubmitVideo.view";
import RoutePrivate from "./App.routes.private.component";

const Routes = () => {
  return (
    <>
      <Switch>
        <RoutePrivate path="/submit-video" component={SubmitVideoView} />
        <RoutePrivate path="/videos/:videoId" component={EditorView} />
        <RoutePrivate path="/videos" component={VideosListView} />
        <RoutePrivate path="/profile" component={ProfileView} />
        <Route path="/auth" component={AuthView} />
        <Route path="/" component={LandingView} />
      </Switch>
    </>
  );
};

export default Routes;
