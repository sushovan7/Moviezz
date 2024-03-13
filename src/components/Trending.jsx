import React from "react";
import TopNavbar from "./templates/TopNavbar";
import Dropdown from "./templates/Dropdown";
import { useNavigate } from "react-router-dom";

function Trending() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen ">
      <div className="w-full flex  flex-col gap-4">
        <h1 className="text-2xl p-4 text-center font-semibold w-[20%]  text-zinc-400 mb-4">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line text-3xl text-[#6556CD]"
          ></i>
          Trending
        </h1>
       <div className="flex p-4"> <TopNavbar />
        <div className=" flex  w-[30%] gap-2">
          <Dropdown title="Category" options={["tv", "Movie", "all"]} />
          <Dropdown title="Duration" options={["day", "week"]} />
        </div></div>
      </div>
    </div>
  );
}

export default Trending;
