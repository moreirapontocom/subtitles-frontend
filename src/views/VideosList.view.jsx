import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "flag-icon-css/css/flag-icon.min.css";
import { getAllVideos } from "../services/videos.service";
import { trimToLength } from "./../Utils";
import PageHeader from "../components/PageHeader/PageHeader.component";
import Navbar from "../components/Navbar/Navbar.component";

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
            <img src={video.cover} alt={video.titulo} height="60" />
          </td>
          <td>
            <div>
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="me-3"
              >
                <i className="fab fa-youtube text-danger"></i>
              </a>
              {trimToLength(video.titulo, 50)}
            </div>
          </td>
          <td className="text-center">
            <span
              className={`flag-icon flag-icon-${video.lang.original}`}
            ></span>
          </td>
          <td className="text-center">
            <span className={`flag-icon flag-icon-${video.lang.target}`}></span>
          </td>
          <td className="text-center">
            {getJobStatusDescription(video.status)}
          </td>
          <td className="text-right">
            <Link
              to={`/videos/${video.id}`}
              className="btn btn-outline-secondary"
            >
              <i className="fas fa-keyboard"></i>
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <Navbar authenticated={true} />

      <div className="PageHeader">
        <PageHeader title={`Videos List (${videos.length})`} description="Videos List Description comes here" />
      </div>

      <div className="PageContent">
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th className="text-center">Original</th>
                <th className="text-center">Target</th>
                <th className="text-center">Job Status</th>
                <th className="text-right"></th>
              </tr>
            </thead>
            <tbody>{mapVideos()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default VideosListView;
