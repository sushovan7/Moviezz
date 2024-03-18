import React from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpeg";

function Cards({ data, title }) {
  return (
    <div className="flex w-full h-full flex-wrap justify-between mt-6 bg-[#1f1e24]">
      {data.map((item, index) => {
        return (
          <Link
            to={`/${item.media_type || title}/details/${item.id}`}
            key={index}
            className="w-[15%] relative rounded-md overflow-hidden shrink-0  m-2 shadow-[#000] shadow-sm  "
          >
            <img
              className="w-full h-[70%] object-cover object-center"
              src={
                item.poster_path || item.backdrop_path || item.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.poster_path ||
                      item.backdrop_path ||
                      item.profile_path
                    }`
                  : noImage
              }
              alt="image"
            />
            <div className="w-full h-[30%]   flex items-center justify-between p-2">
              <h1 className="text-sm text-zinc-400 w-[75%] font-regular">
                {item.title ||
                  item.original_title ||
                  item.name ||
                  item.original_name}
              </h1>
              {!item.profile_path ? (
                <div className="font-regular w-[3vh] text-white h-[3vh] flex items-center justify-center border-solid border-2 border-[#6556cd] rounded-full ">
                  <p className="text-sm ">{Math.floor(item.vote_average)}</p>
                </div>
              ) : (
                ""
              )}
              {item.release_date || item.first_air_date ? (
                <div className="font-regular absolute top-1 right-1 w-[5vh] h-[2.2vh] text-black bg-yellow-300  flex items-center justify-center rounded ">
                  <p className="text-sm ">
                    {(item.release_date || item.first_air_date).slice(0, 4)}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
