import PageHeader from "./../components/PageHeader/PageHeader.component";
import Navbar from "./../components/Navbar/Navbar.component";
import Footer from "./../components/Footer/Footer.component";
import SubmitVideo from "../components/SubmitVideo/SubmitVideo.component";

const SubmitVideoView = () => {
  return (
    <>
      <Navbar authenticated={true} />

      <div className="PageHeader">
        <PageHeader
          title="Submit video"
          description="Aqui tem a descrição desta tela"
        />
      </div>

      <div className="PageContent">
        <div className="container">
          <SubmitVideo />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SubmitVideoView;
