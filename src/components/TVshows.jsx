import React, { useEffect, useState } from "react";
import TopNavbar from "./templates/TopNavbar";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./templates/Dropdown";

function TVshows() {
  const navigate = useNavigate();
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const [category, setCategory] = useState("airing_today");

  document.title = 'Moviezz | TV Shows';

  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setTv((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshPage = () => {
    if (tv === 0) {
      getTv();
    } else {
      setPage(1);
      setTv([])
      getTv();
    }
  };

  useEffect(() => {
   refreshPage();
  },[category]);

  return tv.length > 0 ? (
    <div className="w-screen h-full p-8">
      <div className="flex w-full items-center justify-between h-[8vh] ">
        <div className="flex w-[20%] \">
          <h1 className="text-2xl font-semibold  text-zinc-400 mb-4">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-2xl cursor-pointer text-[#6556CD]"
            ></i>
            TV Shows <small className="text-sm ml-2 text-zinc-600">{category}</small>
          </h1>
        </div>
        <div className="w-[65%]">
          {" "}
          <TopNavbar />
        </div>
        <div className=" flex w-[15%] gap-2 ">
          <Dropdown
            title="Category"
            options={["on_the_air","popular", "top_rated","airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>

      </div>
      <InfiniteScroll
        dataLength={tv.length} //This is important field to render the next data
        next={getTv}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={tv} title='tv'/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default TVshows;
