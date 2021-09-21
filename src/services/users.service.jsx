const API = "http://localhost:3004";

export function login(user) {
  return fetch(`${API}/users/1`)
    .then((data) => data.json())
    .then((data) => data);
}
