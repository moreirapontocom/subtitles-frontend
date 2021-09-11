import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

// https://www.npmjs.com/package/react-player
// https://www.youtube.com/watch?v=2_FJrmft3uQ // Fellipe
// https://www.youtube.com/watch?v=EvJR-uBrPpo // Patrick
// https://www.youtube.com/embed/2_FJrmft3uQ
// https://youtu.be/2_FJrmft3uQ

import "./Editor.component.scss";

const Editor = () => {
  const defaultVideo = "https://www.youtube.com/watch?v=2_FJrmft3uQ";

  const [video, setVideo] = useState(defaultVideo);
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

  function doAction(action) {
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
            url={video}
          />

          <br />

          <input
            onChange={(e) => setVideo(e.target.value)}
            value={video}
            type="url"
          />
        </div>
        <div className="col">
          <textarea
            onChange={onUserTyping}
            cols="30"
            rows="20"
            placeholder="Edit the vídeo subtitles here"
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

          {playing ? (
            <button onClick={() => doAction("pause")} type="button">
              <i className="fas fa-pause"></i> Pause
            </button>
          ) : (
            <button onClick={() => doAction("play")} type="button">
              <i className="fas fa-play"></i> Play
            </button>
          )}

          <button onClick={() => submitCaption("draft")} type="button">
            <i className="fas fa-check"></i> Save Draft
          </button>
          <button
            onClick={() => submitCaption("publish")}
            type="button"
            className="success"
          >
            <i className="fas fa-check"></i> Publish
          </button>
        </div>
      </div>
    </>
  );
};

export default Editor;
