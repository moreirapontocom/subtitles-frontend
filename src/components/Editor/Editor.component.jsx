import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./Editor.component.scss";

const Editor = (props) => {
  const { video } = props;
  const [playing, setPlaying] = useState(false);
  const [captionValue, setCaptionValue] = useState("");
  const [pauseVideoWhileTyping, setPauseVideoWhileTyping] = useState(true);
  let timer;

  function onUserTyping(e) {
    const captionValue = e.target.value;

    if (playing && pauseVideoWhileTyping) {
      setPlaying(false);
    }

    if (!pauseVideoWhileTyping) {
      setCaptionValue(captionValue);
      return;
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!playing) {
        setPlaying(true);
        setCaptionValue(captionValue);
      }
    }, 1000);
  }

  function submitCaption(submissionMethod) {
    if (playing) {
      setPlaying(false);
    }
    console.log(`submissionMethod: ${submissionMethod}`);
    console.log(`subtitle: ${captionValue}`);
    alert(`Submited as ${submissionMethod}`);
  }

  function doPlayerAction(action) {
    action === "play" ? setPlaying(true) : setPlaying(false);
  }

  function onPlayerAction(action) {
    action === "play" ? setPlaying(true) : setPlaying(false);
  }

  return (
    <>
      <div className="Editor row">
        <div className="col">
          <ReactPlayer
            config={{
              youtube: {
                playerVars: {
                  rel: 0,
                  showinfo: 0,
                  ecver: 2,
                  modestbranding: 1,
                  controls: 0,
                  disablekb: 1,
                  fs: 0,
                },
              },
            }}
            onPlay={() => onPlayerAction("play")}
            onPause={() => onPlayerAction("pause")}
            playing={playing}
            url={video.url}
          />
        </div>
        <div className="col">
          <textarea
            onChange={onUserTyping}
            cols=""
            className="form-control"
            rows="20"
            placeholder="Edit the vídeo subtitles here"
            value={video.subtitles}
          ></textarea>

          <div className="pauseVideoWhileTyping">
            <label>
              <input
                onChange={() =>
                  setPauseVideoWhileTyping(!pauseVideoWhileTyping)
                }
                checked={pauseVideoWhileTyping}
                type="checkbox"
              />{" "}
              Pause video while typing
            </label>
          </div>

          <div className="row">
            <div className="col">
              <div className="btn-group" role="group" aria-label="Basic example">
                {playing ? (
                  <button onClick={() => doPlayerAction("pause")} type="button" className="btn btn-secondary">
                    <i className="fas fa-pause"></i> Pause
                  </button>
                ) : (
                  <button onClick={() => doPlayerAction("play")} type="button" className="btn btn-secondary">
                    <i className="fas fa-play"></i> Play
                  </button>
                )}
              </div>
            </div>
            <div className="col text-end">

              <div className="btn-group" role="group" aria-label="Basic example">
                <button onClick={() => submitCaption("draft")} type="button" className="btn btn-primary me-1">
                  <i className="fas fa-check"></i> Save Draft
                </button>
                <button
                  onClick={() => submitCaption("publish")}
                  type="button"
                  className="btn btn-success"
                >
                  <i className="fas fa-check"></i> Publish
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Editor;
