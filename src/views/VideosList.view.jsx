import Panel from "../views/Panel.view";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "flag-icon-css/css/flag-icon.min.css";
import { getAllVideos } from "../services/videos.service";
import { trimToLength } from "./../Utils";

const VideosListView = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const list = await getAllVideos();
    return setVideos(list);
  }

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

  function mapVideos() {
    return videos.map((video) => {
      return (
        <tr key={video.url}>
          <td>
            <img src={video.cover} alt={video.titulo} height="70" />
          </td>
          <td>
            <div>
              <strong>{trimToLength(video.titulo, 50)}</strong>
            </div>
            <div>{trimToLength(video.description, 70)}</div>
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
          <td className="text-right">
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
        title={`Videos List (${videos.length})`}
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
              <th className="text-right"></th>
            </tr>
          </thead>
          <tbody>{mapVideos()}</tbody>
        </table>
      </Panel>
    </>
  );
};

export default VideosListView;
