import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "/th.jpeg";

function TopNavbar() {
  const [inputQuery, setInputQuery] = useState("");

  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${inputQuery}`);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [inputQuery]);

  return (
    <>
      <div className="w-[50%] relative h-[8vh] flex items-center mx-auto  justify-center">
        <i className="ri-search-line text-2xl text-zinc-300"></i>
        <input
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          className="mx-10  text-zinc-100 w-[80%]  border-none outline-none px-4 bg-transparent text-l py-2"
          type="text"
          placeholder="Search Anything"
        />
        {inputQuery.trim().length > 0 && (
          <i
            onClick={() => setInputQuery("")}
            className="ri-close-large-line text-2xl text-zinc-300"
          ></i>
        )}
      </div>
      <div className="w-[50%] absolute rounded-md px-10 max-h-[40vh]  top-[7%] left-[35%] bg-zinc-200 flex flex-col gap-2 overflow-auto">
        {searches.map((search) => (
          <Link
            key={search.id}
            className="w-full font-semibold text-zinc-600 p-2 flex items-center justify-start gap-2 border-b-[1px] border-zinc-100 hover:bg-zinc-300 hover:text-black"
          >
            <img
              className="object-cover shadow-lg rounded-full object-center w-[10vh] h-[10vh]"
              src={
                search.poster_path ||
                search.backdrop_path ||
                search.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      search.poster_path ||
                      search.backdrop_path ||
                      search.profile_path
                    }`
                  : noImage
              }
              alt="image not found"
            />
            <span>
              {search.title ||
                search.original_title ||
                search.name ||
                search.original_name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default TopNavbar;
