import Panel from "../views/Panel.view";
import VideosList from "../components/VideosList/VideosList.component";

const VideosListView = () => {
  return (
    <>
      <Panel title="Videos List" description="Videos List Description comes here">
        <VideosList></VideosList>
      </Panel>
    </>
  );
};

export default VideosListView;
