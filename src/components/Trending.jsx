import React, { useEffect, useState } from "react";
import TopNavbar from "./templates/TopNavbar";
import Dropdown from "./templates/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending((prev) => [...prev, ...data.results]);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen p-6">
      <div className="flex w-full items-center justify-between h-[8vh] ">
        <div className="flex w-[10%] \">
          <h1 className="text-2xl font-semibold  text-zinc-400 mb-4">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-2xl text-[#6556CD]"
            ></i>
            Trending
          </h1>
        </div>
        <div className="w-[65%]">
          {" "}
          <TopNavbar />
        </div>

        <div className=" flex w-[25%] gap-2 ">
          <Dropdown
            title="Category"
            options={["tv", "Movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            options={["day", "week"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length} //This is important field to render the next data
        next={getTrending}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Trending;
