import Auth from "./../services/auth.service";

const API = "http://localhost:8055/items";
const youtubeApiKey = "AIzaSyC-FhFJq7JYcqio6AKMSCpxmMXcUBrDg7o";

export function getAllVideos() {
  const { access_token } = Auth.getUser();
  return fetch(`${API}/videos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data.data);
}

export function getVideoById(videoId) {
  const { access_token } = Auth.getUser();
  return fetch(`${API}/videos/${videoId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data.data);
}

export function updateVideo(video) {
  const { access_token } = Auth.getUser();
  const { id, subtitles } = video;
  return fetch(`${API}/videos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({ subtitles }),
  })
    .then((data) => data.json())
    .then((data) => data);
}

export function addVideo(video) {
  return fetch(`${API}/videos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  }).then((res) => res.json());
}

export function removeVideoById(videoId) {
  return fetch(`${API}/videos/${videoId}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

/*
GET VIDEO CC SNIPPET INFOS
curl \
  'https://youtube.googleapis.com/youtube/v3/captions?part=snippet&videoId=0GDI1GScv0M&key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed


  RETORNO
  {
  "kind": "youtube#captionListResponse",
  "etag": "aj0xnM0_K41MqhvdNYbaaBuZQCQ",
  "items": [
    {
      "kind": "youtube#caption",
      "etag": "BVqHnZEisji_5zPFaQBx2OoLZh0",
      "id": "SH0WAaDNRTo-oSafYTNc80qLlP4e2VBI",
      "snippet": {
        "videoId": "0GDI1GScv0M",
        "lastUpdated": "2021-09-22T15:55:51.883377Z",
        "trackKind": "standard",
        "language": "pt",
        "name": "",
        "audioTrackType": "unknown",
        "isCC": false,
        "isLarge": false,
        "isEasyReader": false,
        "isDraft": false,
        "isAutoSynced": false,
        "status": "serving"
      }
    }
  ]
}

*/

export function getVideoSnippetFromYoutubeVideoUrl(youtubeVideoUrl) {
  const youtubeApiUrl =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet";
  const videoId = youtubeVideoUrl.split("v=")[1];
  return fetch(`${youtubeApiUrl}&id=${videoId}&key=${youtubeApiKey}`)
    .then((res) => res.json())
    .then((json) => json.items[0].snippet);

  /*
  {
      etag: "5dkbQ_vPnxAm0eaaWc3u_HaRJQY"
      id: "QH2-TGUlwu4"
      kind: "youtube#video"
      snippet: {
          categoryId: "24"
          channelId: "UC3VHfy8e1jbDnT5TG2pjP1w"
          channelTitle: "Nyan Cat"
          defaultAudioLanguage: "zxx"
          description: "For PJ.↵↵↵Adopt an official Nyan Cat NFT today! 🐈🏳️‍🌈✨ http://nyancatcollection.com / https://opensea.io/collection/nyan-cat-officia…"
          liveBroadcastContent: "none"
          localized: {title: "Nyan Cat [original]", description: "For PJ.↵↵↵Adopt an official Nyan Cat NFT today! 🐈…UTAU http://momolabo.lolipop.jp/nyancatsong/Nyan/"}
          publishedAt: "2011-04-06T03:30:29Z"
          thumbnails: {
              default: {url: "https://i.ytimg.com/vi/QH2-TGUlwu4/default.jpg", width: 120, height: 90}
              high: {url: "https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg", width: 480, height: 360}
              medium: {url: "https://i.ytimg.com/vi/QH2-TGUlwu4/mqdefault.jpg", width: 320, height: 180}
              standard: {url: "https://i.ytimg.com/vi/QH2-TGUlwu4/sddefault.jpg", width: 640, height: 480}
          }
          title: "Nyan Cat [original]"
      }
      kind: "youtube#videoListResponse"
      pageInfo: {totalResults: 1, resultsPerPage: 1}
  }
  */
}
