import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommeded from "../../Components/Recommended/Recommeded";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Video = () => {
  const { videoId, categoryId } = useParams();

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      window.location.hash = "#";
    });
  });

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommeded categoryId={categoryId} />
    </div>
  );
};

export default Video;
