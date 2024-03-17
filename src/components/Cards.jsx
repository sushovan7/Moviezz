import React from "react";
import { Link } from "react-router-dom";
import noImage from '/th.jpeg'

function Cards({ data,title }) {
  return (
    <div className="flex w-full h-full flex-wrap justify-between mt-6 bg-[#1f1e24]">
      {data.map((item,index) => {
        return (<Link
            key={index}
            className="w-[15%] rounded-md shrink-0 h-full m-2 shadow-[#000] shadow-sm  "
          >
            <img
              className="w-full h-[80%] object-cover object-center"
              src={
                item.poster_path || item.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.poster_path || item.backdrop_path
                    }`
                  : noImage
              }
              alt="image"
            />
            <div className="w-full h-[20%]   flex items-center justify-between p-2">
              <h1 className="text-m text-zinc-400 w-[70%] font-regular">
                {item.title ||
                  item.original_title ||
                  item.name ||
                  item.original_name}
              </h1>
              <div className="font-regular text-white h-[4vh] flex items-center justify-center border-solid border-2 border-[#6556cd] w-[4vh] rounded-full ">
                <p className="text-x ">{Math.floor(item.vote_average)}</p>
              </div>
            </div>
          </Link>);
      })}
    </div>
  );
}

export default Cards;
