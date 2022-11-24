import React, { useEffect, useState } from "react";
import './Youtube.css'
function Youtube1() {
  const [user, setUser] = useState([]);
  useEffect(() => {

    //https://www.googleapis.com/youtube/v3/search?key=AIzaSyDCaGdAHhyhTvz5p-0srOdTOfaV-DdOEXI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=10


    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDCaGdAHhyhTvz5p-0srOdTOfaV-DdOEXI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        const videos = data.items;
        setUser(videos);
      });
  }, []);
  console.log(user);
  return (
    <div className="container">
      <div className="row h-100 align-items-center justify-content-center text-center youtubemain">
        <div className="col-12">
          <div className="title-wraper bold video-title-wrapper padding">
            <h1>Latest Apple Videos</h1>
          </div>
        </div>
        {user?.map((singleVideo, index) => {
          let vidId = singleVideo.id.videoId;
          let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
          let videoWrapper = (
            <div key={index} className="col-sm-12 col-md-4 youtubemain youtufont">
              <div className="singleVideoWrapper">
                <div className="videoThumbnail">
                  <a href={vidLink} target="_blank">
                    <img src={singleVideo.snippet.thumbnails.high.url} />
                  </a>
                </div>
                <div className="videoInfoWrapper">
                  <div className="videoTitle">
                    <a href={vidLink} target="_blank">
                      {singleVideo.snippet.title}
                    </a>
                  </div>
                  <div className="videoDesc">
                    {singleVideo.snippet.description}
                  </div>
                </div>
              </div>
            </div>
          );
          return videoWrapper;
        })}
      </div>
    </div>
  );
}

export default Youtube1;
