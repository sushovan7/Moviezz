import React from "react";
import axios from "../utils/axios";
import SideNavbar from "./templates/SideNavbar";
import TopNavbar from "./templates/TopNavbar";
import Header from "./templates/Header";
import { useState, useEffect } from "react";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loader from "./Loader";

function Home() {
  document.title = "Moviezz";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

  const [category, setCategory] = useState("all");

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let wallpaperResult =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(wallpaperResult);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      let trendingResult = data.results;
      setTrending(trendingResult);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
    getTrending();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <SideNavbar />
      <div className="w-[80%] overflow-auto min-h-screen">
        <TopNavbar />
        <Header data={wallpaper} />
        <div className="w-full h-[5%] flex justify-between px-4 ">
          <h1 className="text-zinc-400 font-semibold p-2  text-2xl ">
            Trending
          </h1>
          <Dropdown
            func={(e) => setCategory(e.target.value)}
            title="Filter"
            options={["tv", "movie", "all"]}
          />
        </div>
        <HorizontalCards data={trending} title={category}/>
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Home;
