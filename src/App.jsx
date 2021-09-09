import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Views
import EditorView from './views/Editor.view';
import VideosListView from './views/VideosList.view';

// Components
import Navbar from './components/Navbar/Navbar.component';
import SubmitVideo from './components/SubmitVideo/SubmitVideo.component';
import Notification from './components/Notification/Notification.component';

const App = () => {

    const [notification, setNotification] = useState(null);
    // const [videos, setVideos] = useState(getVideos());

    function newVideoHasBeenSubmited(newVideo) {
        // setVideos([newVideo, ...videos]);
        setNotification('Video has been submited');

        setTimeout(() => {
            setNotification(null);
        }, 3000);
    }

    return <>
        <Router>

            {notification ? <Notification message={notification} /> : null}

            <div className="container">
                <Navbar authenticated={true} />

                <Switch>
                    <Route path="/videos/:videoId">
                        <EditorView />
                    </Route>
                    <Route path="/submitVideo">
                        <SubmitVideo onVideoSubmit={newVideoHasBeenSubmited}></SubmitVideo>
                    </Route>
                    <Route path="/">
                        <VideosListView />
                    </Route>
                </Switch>

            </div>
        </Router>
    </>;
}

export default App;