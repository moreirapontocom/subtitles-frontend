const API = "http://localhost:3004";

export function getAllVideos() {
  return fetch(`${API}/videos`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getVideoById(videoId) {
    return fetch(`${API}/videos/${videoId}`)
        .then((res) => res.json())
        .then((data) => data);
}