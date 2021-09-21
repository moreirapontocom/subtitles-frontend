import PageHeader from "../components/PageHeader/PageHeader.component";
import Navbar from "../components/Navbar/Navbar.component";
import Footer from "../components/Footer/Footer.component";

const ProfileView = () => {
  return <>
      <Navbar authenticated={true} />

      <div className="PageHeader">
          <PageHeader
              title="Your Profile"
              description="Your profile settings" />
      </div>

      <div className="PageContent">
          <div className="container">
              Profile content
          </div>
      </div>
    <Footer />
  </>;
};

export default ProfileView;
