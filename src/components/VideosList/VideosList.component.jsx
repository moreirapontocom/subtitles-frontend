import { useState } from "react";
import { Link } from "react-router-dom";

const VideosList = () => {
  const [videos] = useState(getVideos());

  function getVideos() {
    const list = [
      {
        id: 1,
        titulo: "Titulo 1",
        description: "Descripcion 1",
        cover: "https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
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
          target: "EN",
        },
        status: "completed",
        startedAt: "2020-01-01 10:12:25",
        updatedAt: "2020-01-05 23:00:12",
      },
    ];

    return list.map((video) => {
      return (
        <tr key={video.url}>
          <td>{video.id}</td>
          <td>
            <span className="tag status">{video.status}</span>
          </td>
          <td>
            <img src={video.cover} alt={video.titulo} height="100" />
          </td>
          <td>
            <Link to={`/videos/${video.id}`}>{video.titulo}</Link>
          </td>
          <td>{video.description}</td>
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
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Cover</th>
            <th>Titulo</th>
            <th>Description</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>{videos}</tbody>
      </table>
    </>
  );
};

export default VideosList;
