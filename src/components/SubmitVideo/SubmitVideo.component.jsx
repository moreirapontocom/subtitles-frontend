import React, { useState } from "react";
import { getVideoSnippetFromYoutubeVideoUrl, addVideo } from "./../../services/videos.service";
import "./../../styles/styles.scss";

// https://www.youtube.com/watch?v=2_FJrmft3uQ Felipe
// https://www.youtube.com/watch?v=EvJR-uBrPpo Patrick
// https://www.youtube.com/watch?v=75QmUkdXo8Q Patrick 2
// https://www.youtube.com/watch?v=0GDI1GScv0M Lucas

const SubmitVideo = (props) => {
  const [videoUrl, setVideoUrl] = useState("");

  async function submitForm(e) {
    e.preventDefault();

    const videoSnippet = await getVideoSnippetFromYoutubeVideoUrl(videoUrl);
    addVideo({
      id: Math.random(),
      title: videoSnippet.title,
      description: videoSnippet.description,
      cover: videoSnippet.thumbnails.default.url,
      url: videoUrl,
      duration: null,
      language_original: "br",
      language_target: "br",
      status: "1not_started",
      createdAt: (new Date()).toISOString(),
      startedAt: null,
      updatedAt: null,
      channel_id: videoSnippet.channelId,
      channel_title: videoSnippet.channelTitle
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
