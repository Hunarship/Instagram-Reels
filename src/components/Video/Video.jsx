import React, { useRef, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Video.css";

export default function Video({ channel, song, url, likes, comment, shares }) {
  const vidRef = useRef();

  useEffect(() => {
    const scroll = document.getElementById("video-container");

    const playVideo = () => {
      if (isVideoVisible()) {
        vidRef.current.play();
      } else {
        vidRef.current.pause();
      }
    };

    const isVideoVisible = () => {
      const rect = vidRef.current.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    // Initial play when component mounts
    playVideo();

    // Set up event listener for scrolling
    if (scroll) {
      scroll.addEventListener("scroll", playVideo);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (scroll) {
        scroll.removeEventListener("scroll", playVideo);
      }
    };
  }, []);

  return (
    <div className="video-cards">
      <video
        className="video-player"
        ref={vidRef}
        src={url}
        loop
        autoPlay
        playsInline
        muted
      />
      <Footer
        channel={channel}
        song={song}
        likes={likes}
        comment={comment}
        shares={shares}
      />
    </div>
  );
}
