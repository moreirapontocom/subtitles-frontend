import { BrowserRouter as Router } from "react-router-dom";

// Components
import Routes from "./App.routes";
import Navbar from "./components/Navbar/Navbar.component";
// import Notification from './components/Notification/Notification.component';

const App = () => {
  // const [notification, setNotification] = useState(null);
  // const [videos, setVideos] = useState(getVideos());

  // function newVideoHasBeenSubmited(newVideo) {
  //     // setVideos([newVideo, ...videos]);
  //     setNotification('Video has been submited');

  //     setTimeout(() => {
  //         setNotification(null);
  //     }, 3000);
  // }

  return (
    <>
      <Router>
        {/* {notification ? <Notification message={notification} /> : null} */}

        <div className="container">
          <Navbar authenticated={true} />
          <Routes />
        </div>
      </Router>
    </>
  );
};

export default App;
