import React, { useState } from "react";
import './../../styles/styles.scss';

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

const SubmitVideo = (props) => {

    const youtubeApiKey = 'AIzaSyC-FhFJq7JYcqio6AKMSCpxmMXcUBrDg7o';
    const [videoUrl, setVideoUrl] = useState('');

    const submitForm = async (e, props) => {
        e.preventDefault();

        let videoId = videoUrl.split('v=')[1];
        let videoSnippet = {};

        console.log('Enviou o form');

        await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${youtubeApiKey}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                videoSnippet = json.items[0].snippet;
            });

        // setVideoUrl('https://www.youtube.com/watch?v=QH2-TGUlwu4');
        // props.onSubmit('opa');
        props.onVideoSubmit({
            id: Math.random(),
            titulo: videoSnippet.title,
            description: videoSnippet.description,
            cover: videoSnippet.thumbnails.default.url,
            url: videoUrl,
            duration: 'FALTA',
            lang: {
                original: 'PT',
                target: 'EN'
            },
            status: 'completed',
            startedAt: '2020-01-01 10:12:25',
            updatedAt: '2020-01-05 23:00:12',
        });

        setVideoUrl('');
    }

    return <>
        <form onSubmit={(e) => submitForm(e, props)}>
            <div>
                <label htmlFor="videoUrl">Video URL</label>
                <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} type="url" id="videoUrl" placeholder="https://youtube.com/?watch=..." />
            </div>
            <div>
                <button disabled={!videoUrl.trim()} type="submit" className="success">Enviar</button>
            </div>
        </form>
    </>;
}

export default SubmitVideo;