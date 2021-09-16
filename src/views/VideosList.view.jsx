import Panel from "../views/Panel.view";
import { useState } from "react";
import { Link } from "react-router-dom";

const VideosListView = () => {
  const [videos] = useState(getVideos());

  function getVideos() {
    const list = [
      {
        id: 2,
        titulo: "Vídeo do Felipe",
        description: "O Felipe mora no Canadá com a Renata",
        cover: "https://i.ytimg.com/vi/2_FJrmft3uQ/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=2_FJrmft3uQ",
        duration: "1:30",
        lang: {
          original: "PT",
          target: "EN",
        },
        status: "completed",
        startedAt: "2020-01-01 10:12:25",
        updatedAt: "2020-01-05 23:00:12",
      },
      {
        id: 3,
        titulo: "Salve Batrick",
        description: "Patrick tá nos eua",
        cover: "https://i.ytimg.com/vi/EvJR-uBrPpo/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=EvJR-uBrPpo",
        duration: "1:30",
        lang: {
          original: "PT",
          target: "PT",
        },
        status: "completed",
        startedAt: "2020-01-01 10:12:25",
        updatedAt: "2020-01-05 23:00:12",
      },
    ];

    return list.map((video) => {
      return (
        <tr key={video.url}>
          <td className="text-center">
            {video.status === "completed" ? (<i className="fas fa-clock"></i>) : (<i className="fas fa-check"></i>)}
          </td>
          <td>
            <img src={video.cover} alt={video.titulo} height="70" />
          </td>
          <td>
            <div>
              <Link to={`/videos/${video.id}`}>{video.titulo}</Link>
            </div>
            {video.description}
          </td>
          <td>
            {(video.lang.original === video.lang.target) ? 'Legendar' : 'Traduzir'} ({video.lang.original} &gt; {video.lang.target})
          </td>
          <td>
            <a href={video.url} target="_blank" rel="noreferrer">
              {video.url}
            </a>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <Panel
        title="Videos List"
        description="Videos List Description comes here"
      >
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="text-center">Status</th>
              <th>Cover</th>
              <th>Titulo</th>
              <th>Job</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>{videos}</tbody>
        </table>
      </Panel>
    </>
  );
};

export default VideosListView;
