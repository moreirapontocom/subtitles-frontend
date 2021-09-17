import React, { useState } from "react";
import { getVideoSnippetFromYoutubeVideoUrl, addVideo } from "./../../services/videos.service";
import "./../../styles/styles.scss";

const SubmitVideo = (props) => {
  const [videoUrl, setVideoUrl] = useState("");

  async function submitForm(e) {
    e.preventDefault();

    const videoSnippet = await getVideoSnippetFromYoutubeVideoUrl(videoUrl);
    addVideo({
      id: Math.random(),
      titulo: videoSnippet.title,
      description: videoSnippet.description,
      cover: videoSnippet.thumbnails.default.url,
      url: videoUrl,
      duration: "FALTA",
      lang: {
        original: "BR",
        target: "BR",
      },
      status: "not_started",
      startedAt: "2020-01-01 10:12:25",
      updatedAt: "2020-01-05 23:00:12",
    });
    setVideoUrl("");
  }

  return (
    <>
      <form onSubmit={(e) => submitForm(e)}>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="videoUrl">Video URL <span className="text-danger">*</span></label>
          <input
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            type="url"
            id="videoUrl"
            placeholder="https://youtube.com/?watch=..."
            className="form-control"
          />
        </div>
        <div>
          <button disabled={!videoUrl.trim()} type="submit" className="btn btn-primary">
            Submit Video
          </button>
        </div>
      </form>
    </>
  );
};

export default SubmitVideo;
