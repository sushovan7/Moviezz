import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncLoadMovie, removeMovie } from "../store/actions/MovieActions";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpeg";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieInfo } = useSelector((state) => state.movie);
  console.log(movieInfo);
  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, []);

  return movieInfo ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
          movieInfo.details.backdrop_path || movieInfo.details.poster_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
      }}
      className="w-screen h-screen relative px-20"
    >
      <div className="left w-[60%] text-white absolute bottom-[20%] flex flex-col gap-4">
        <h1 className="text-white text-5xl font-bold">
          {movieInfo.details.title || movieInfo.details.original_title}
        </h1>
        <div className="ratings flex gap-10 items-center">
          <div className="font-semibold">
            <i className="text-yellow-500 ri-star-fill mr-1"></i> 
            {movieInfo.details.vote_average.toFixed(1)} <span className="mx-2">|</span>
            {movieInfo.details.vote_count}
          </div>
          <div className="genre text-zinc-300 flex gap-4 font-semibold text-sm items-center">
            <h1>{movieInfo.details.runtime}<small>min</small></h1>
            <i className="ri-circle-fill"></i>
            <div className="flex gap-3">
              {movieInfo.details.genres.map((genre, index) => {
                return <h3 key={index}>{(genre.name)}</h3>;
              })}
            </div>
            <i className="ri-circle-fill"></i>
            <h1>{movieInfo.details.release_date.slice(0, 4)}</h1>
          </div>
        </div>
        <div className="overwiew w-[70%] text-zinc-400">
          <p>{movieInfo.details.overview.slice(0, 500)}</p>
        </div>
        <Link className=" text-white w-[20%] font-medium px-4 py-4 bg-[#6556cd] duration-300  hover:bg-[#3522af] rounded text-center">
          Watch Trailer
        </Link>
      </div>
      <h3 className="right text-white absolute top-[63%] text-2xl font-bold right-[30%] flex items-center">Cast</h3>
      <div className="right text-white absolute top-[70%] right-[5%] flex items-center gap-3 w-[30%] overflow-x-auto">
        {movieInfo.credits.map((cast,index)=> {
          return <div className="w-[7vw] h-[8vw] shrink-0  flex flex-col items-center justify-center gap-2 p-2">
          <img
              className="object-cover shadow-lg rounded-full object-center w-[70%] h-[60%]"
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      cast.profile_path
                    }`
                  : noImage
              }
              alt="image no found"
            />
            <h1 className="text-sm font-light text-zinx-500 text-center">{cast.name || cast.original_name}</h1>
          </div>
        })}
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default MovieDetails;
