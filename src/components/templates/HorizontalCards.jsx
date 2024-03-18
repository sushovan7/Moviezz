import React from "react";
import { Link } from "react-router-dom";

function HorizontalCards({ data,title }) {
  return (
    <div className="w-full h-[50vh]  px-2 py-1 mt-3">
      <div className="w-full h-[100%] flex  pb-2 mt-2 overflow-y-hidden">
        {data.map((item) => {
          return (
            <Link to={`/${item.media_type}/details/${item.id}`}
              key={item.id}
              className="w-[20%] relative rounded-md shrink-0 h-full m-2 shadow-[#000] shadow-sm overflow-hidden "
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
                {item.release_date ? (
                <div className="font-regular absolute top-1 right-1 w-[5vh] h-[2.2vh] text-black bg-yellow-300  flex items-center justify-center rounded ">
                  <p className="text-sm ">{item.release_date.slice(0, 4)}</p>
                </div>
              ) : (
                <div className="font-regular absolute top-1 right-1 w-[5vh] h-[2.2vh] text-black bg-yellow-300  flex items-center justify-center rounded ">
                  <p className="text-sm ">{item.first_air_date.slice(0, 4)}</p>
                </div>
              )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalCards;
