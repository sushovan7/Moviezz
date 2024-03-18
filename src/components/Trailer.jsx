import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";


function Trailer() {
  const navigate=useNavigate()
  const { pathname } = useLocation();
  const category = pathname.includes('movie') ? 'movie' : 'tv';
  const video = useSelector((state) => state[category].movieInfo.videos);
  console.log(category)
  console.log(video);
  return (
    <div className="w-screen z-50 h-screen absolute left-[50%] top-[50%] flex items-center justify-center bg-[rgba(0,0,0,0.8)] -translate-x-1/2 -translate-y-1/2">
      <i
        onClick={() => navigate(-1)}
        className="ri-arrow-left-line text-5xl absolute top-[5%] left-[4%] cursor-pointer text-zinc-100"
      ></i>
        <ReactPlayer height={600} width={1200} url={`https://www.youtube.com/watch?v=${video.key}`}/>
    </div>
  );
}

export default Trailer;