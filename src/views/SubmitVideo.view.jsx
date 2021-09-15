import Panel from "./Panel.view";
import SubmitVideo from "../components/SubmitVideo/SubmitVideo.component";

const SubmitVideoView = () => {
  return (
    <>
      <Panel title="Submit video" description="Aqui tem a descrição desta tela">
        <SubmitVideo />
      </Panel>
    </>
  );
};

export default SubmitVideoView;
