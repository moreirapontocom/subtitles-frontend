import Panel from "../views/Panel.view";
import { useState } from "react";
import { Link } from "react-router-dom";
import "flag-icon-css/css/flag-icon.min.css";

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
          original: "br",
          target: "us",
        },
        status: "not_started",
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
          original: "br",
          target: "br",
        },
        status: "completed",
        startedAt: "2020-01-01 10:12:25",
        updatedAt: "2020-01-05 23:00:12",
      },
    ];

    function getJobStatusDescription(jobStatus) {
      switch (jobStatus) {
        case "completed":
          return <span className="badge bg-success">Complete</span>;

        case "not_started":
          return <span className="badge bg-secondary">To Do</span>;

        case "in_progress":
          return <span className="badge bg-primary">In Progress</span>;

        default:
          return <span className="badge bg-primary">--</span>;
      }
    }

    return list.map((video) => {
      return (
        <tr key={video.url}>
          <td>
            <img src={video.cover} alt={video.titulo} height="70" />
          </td>
          <td>
            <div>
              <strong>{video.titulo}</strong>
            </div>
            <div>
              {video.description}
            </div>
            <a href={video.url} target="_blank" rel="noreferrer">
              {video.url}
            </a>
          </td>
          <td>
            {video.lang.original === video.lang.target
              ? "Legendar"
              : "Traduzir"}
          </td>
          <td className="text-center">
            <span
              className={`flag-icon flag-icon-${video.lang.original}`}
            ></span>
          </td>
          <td className="text-center">
            <span className={`flag-icon flag-icon-${video.lang.target}`}></span>
          </td>
          <td>{getJobStatusDescription(video.status)}</td>
          <td>
            <Link to={`/videos/${video.id}`} className="btn btn-secondary">
              <i className="fas fa-keyboard"></i>
            </Link>
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
              <th>Cover</th>
              <th>Titulo</th>
              <th>Job</th>
              <th className="text-center">Original</th>
              <th className="text-center">Destino</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{videos}</tbody>
        </table>
      </Panel>
    </>
  );
};

export default VideosListView;
