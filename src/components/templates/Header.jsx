import React from "react";
import { Link } from "react-router-dom";
function Header({ data }) {
  return (
    <div
    style={{
      background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
        data.backdrop_path || data.poster_path
      })`,
      backgroundPosition: "top 10%",
      backgroundSize: "cover",
    }}
    className="w-full h-[50vh] flex flex-col p-[5%] items-start justify-end mb-5"
  >
    <h1 className="text-2xl font-bold text-white  w-[65%] mb-4">
      {data.title || data.original_title || data.name || data.original_name}
    </h1>
    <p className="font-regular leading-none text-white  w-[65%] ">
      {data.overview.slice(0, 150)}
      <Link to={`/${data.media_type}/details/${data.id}`} className="font-regular leading-none text-[#6556cd] ">
        ...more
      </Link>
    </p>
    <p className=" mt-5 text-white">
      <i className="text-blue-600 ri-calendar-event-fill mr-3"></i>
      {data.release_date || "No Info"}
      <i className="text-blue-600 ml-6 mr-3 ri-album-fill"></i>
      {data.media_type.toUpperCase()}
    </p>
    <Link to={`/movie/details/${data.id}/trailer`} className="mt-5 text-black font-medium px-4 py-3 bg-[#6556cd] duration-300  hover:bg-[#3522af] rounded-full">
      Watch Trailer
    </Link>
  </div> 
  );
}

export default Header;
