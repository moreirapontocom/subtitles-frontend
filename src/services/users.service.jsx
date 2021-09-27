const API = "http://localhost:8055";

export function login(user) {
  return fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((data) => data.json())
    .then((data) => data);
}

export function getUserData(access_token) {
  return fetch(`${API}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((data) => data.json())
    .then((data) => data);
}
