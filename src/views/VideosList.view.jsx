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
      .filter((item, index) =>
        filter === "all"
          ? item.status !== null
          : item.status.toLowerCase() === filter
      )
      .filter((item) => (item.title.toLowerCase()).includes(searchTerm))
      .sort((a, b) => (a.status > b.status ? 1 : -1))
      .map((video) => {
        return (
          <tr key={video.id}>
            <td className="align-middle text-center">
              <a href={video.url} target="_blank" rel="noreferrer">
                <i className="fab fa-youtube text-danger"></i>
              </a>
            </td>
            <td>
              {video.channel_title}
            </td>
            <td className="align-middle">{trimToLength(video.title, 90)}</td>
            <td className="align-middle text-center">{video.duration ?? '--'}</td>
            <td className="align-middle text-center">
              <span
                className={`flag-icon flag-icon-${video.language_original}`}
              ></span>
              <i className="fas fa-chevron-right ms-3 me-3"></i>
              <span
                className={`flag-icon flag-icon-${video.language_target}`}
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
          <div className="row mb-4">
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
                  <optgroup label="Status">
                    <option value="all">All</option>
                    <option value="0created">Missing setup</option>
                    <option value="1not_started">To Do</option>
                    <option value="2in_progress">In Progress</option>
                    <option value="3completed">Complete</option>
                    <option value="4published">Published</option>
                  </optgroup>
                  <optgroup label="Channel">
                    <option value="channel1">Channel ID 1</option>
                    <option value="channel2">Channel ID 2</option>
                  </optgroup>
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
                className="btn btn-danger mb-4 ms-auto"
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
                <th>Channel</th>
                <th>Video title</th>
                <th className="text-center">Duration</th>
                <th className="text-center">Language</th>
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
