import React from "react";


function HorizontalCards({ data }) {
  return (
    <div className="w-full h-[50vh]  px-2 py-1 mt-3">
      <div className="w-full h-[100%] flex  pb-2 mt-2 overflow-y-hidden">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[20%] rounded-md shrink-0 h-full m-2 shadow-[#000] shadow-sm overflow-hidden "
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalCards;
