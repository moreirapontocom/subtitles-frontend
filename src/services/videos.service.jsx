const API = "http://localhost:3004";

export function getVideosService() {
  return fetch(`${API}/videos`)
    .then((res) => res.json())
    .then((data) => data);
}
