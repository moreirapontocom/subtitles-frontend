import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "flag-icon-css/css/flag-icon.min.css";
import { getAllVideos } from "../services/videos.service";
import { trimToLength } from "./../Utils";
import PageHeader from "../components/PageHeader/PageHeader.component";
import Navbar from "../components/Navbar/Navbar.component";
import Footer from "../components/Footer/Footer.component";

const VideosListView = () => {
  const [videos, setVideos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const list = await getAllVideos();
    return setVideos(list);
  }

  function getJobStatusDescription(jobStatus) {
    switch (jobStatus) {
      case "0created":
        return (
          <span className="badge bg-light text-dark">
            <i className="fas fa-exclamation-triangle text-warning"></i> Missing
            Setup
          </span>
        );

      case "1not_started":
        return <span className="badge bg-secondary">To Do</span>;

      case "2in_progress":
        return <span className="badge bg-primary">In Progress</span>;

      case "3completed":
        return <span className="badge bg-success">Complete</span>;

      case "4published":
        return (
          <span className="badge bg-danger">
            Published <i className="fab fa-youtube"></i>
          </span>
        );

      default:
        return <span className="badge bg-primary">--</span>;
    }
  }

  function mapVideos() {
    return videos
      .filter((item) =>
        filter === "all"
          ? item.status !== null
          : item.status.toLowerCase() === filter
      )
      .filter((item) => (item.titulo.toLowerCase()).includes(searchTerm))
      .sort((a, b) => (a.status > b.status ? 1 : -1))
      .map((video) => {
        return (
          <tr key={video.id}>
            <td className="align-middle text-center">
              <a href={video.url} target="_blank" rel="noreferrer">
                <i className="fab fa-youtube text-danger"></i>
              </a>
            </td>
            <td className="align-middle">{trimToLength(video.titulo, 90)}</td>
            <td className="align-middle text-center">{video.duration}</td>
            <td className="align-middle text-center">
              <span
                className={`flag-icon flag-icon-${video.lang.original}`}
              ></span>
            </td>
            <td className="align-middle text-center">
              <span
                className={`flag-icon flag-icon-${video.lang.target}`}
              ></span>
            </td>
            <td className="align-middle text-center">
              {getJobStatusDescription(video.status)}
            </td>
            <td className="align-middle text-center">
              <Link
                to={`/videos/${video.id}`}
                className="btn btn-outline-secondary btn-sm"
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
        <PageHeader
          title={`Videos List`}
          description="Videos List Description comes here"
        />
      </div>

      <div className="PageContent">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="input-group">
                <div className="input-group-text">
                  <i className="fas fa-filter"></i>
                </div>
                <select
                  defaultValue={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="form-select"
                >
                  <option value="all">All</option>
                  <option value="not_started">To Do</option>
                  <option value="completed">Complete</option>
                  <option value="in_progress">In Progress</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
            <div className="col">
              <span className="wrapperInputSearch">
                <input
                  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                  type="text"
                  className="form-control"
                  placeholder="Search for video title"
                />
              </span>
            </div>
            <div className="col text-end">
              <Link
                to="/submit-video"
                className="btn btn-danger mb-4 ms-auto shadow"
              >
                <i className="fas fa-video me-2"></i> Submit new video
              </Link>
            </div>
          </div>

          <table className="table table-bordered table-striped caption-top">
            <caption>{videos.length} videos found</caption>
            <thead>
              <tr>
                <th></th>
                <th>Video title</th>
                <th className="text-center">Duration</th>
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
    
      <Footer />
    </>
  );
};

export default VideosListView;
