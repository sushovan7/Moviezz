import React from "react";
import axios from "../utils/axios";
import SideNavbar from "./templates/SideNavbar";
import TopNavbar from "./templates/TopNavbar";
import Header from "./templates/Header";
import { useState, useEffect } from "react";
import HorizontalCards from "./templates/HorizontalCards";

function Home() {
  document.title = "Moviezz";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

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
      const { data } = await axios.get(`/trending/all/day`);
      let trendingResult = data.results;
      setTrending(trendingResult);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
    !trending && getTrending();
  }, []);

  return wallpaper && trending ? (
    <>
      <SideNavbar />
      <div className="w-[80%] overflow-auto min-h-screen">
        <TopNavbar />
        <Header data={wallpaper} />
        <HorizontalCards data={trending}/>
      </div>
    </>
  ) : (
    <h1>loading..</h1>
  );
}

export default Home;
