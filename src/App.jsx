import React from "react";

import Video from "./components/Video/Video";

import Logo from "./img/icon.png";

import Vid1 from "./videos/vid1.mp4";
import Vid2 from "./videos/vid2.mp4";
import Vid3 from "./videos/vid3.mp4";

import "./App.css";

export default function App() {
  const data = [
    {
      channel: "aaa",
      song: "song-1",
      url: Vid1,
      likes: "32",
      comment: "2",
      shares: "23",
    },
    {
      channel: "bbb",
      song: "song-2",
      url: Vid2,
      likes: "3",
      comment: "22",
      shares: "23",
    },
    {
      channel: "ccc",
      song: "song-3",
      url: Vid3,
      likes: "89",
      comment: "23",
      shares: "29",
    },
  ];

  return (
    // <div className="App">
      
        
    //     {/*  */}

    //     <div className="video-container" id="video-container">
    //       {/*  */}

    //       {data.map((list, i) => (
    //         <Video
    //           key={i}
    //           channel={list.channel}
    //           song={list.song}
    //           url={list.url}
    //           likes={list.likes}
    //           comment={list.comment}
    //           shares={list.shares}
    //         />
    //       ))}

    //       {/*  */}
    //     </div>
      
    // </div>

    <div className="App">
     <div className="video-container" id="video-container">
     <Video
              // key={i}
              // channel={list.channel}
              // song={list.song}
              url={"https://firebasestorage.googleapis.com/v0/b/aaonisaa3-94ca9.appspot.com/o/videos%2F2cb0fbe0-9d68-11ee-8966-092814640182?alt=media&token=8a7cb8ac-1049-46ca-9035-21db287cd547"}
              // likes={list.likes}
              // comment={list.comment}
              // shares={list.shares}
            />
     </div>
    </div>
  );
}
