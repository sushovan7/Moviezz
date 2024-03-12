import React from "react";
import axios from "../utils/axios";
import SideNavbar from "./templates/SideNavbar";
import TopNavbar from "./templates/TopNavbar";
import Header from "./templates/Header";
import { useState, useEffect } from "react";

function Home() {
  document.title = "Moviezz";

  const [wallpaper, setWallpaper] = useState();

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

  useEffect(() => {
    !wallpaper && getWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <SideNavbar />
      <div className="w-[80%] h-full">
        <TopNavbar />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>loading..</h1>
  );
}

export default Home;
