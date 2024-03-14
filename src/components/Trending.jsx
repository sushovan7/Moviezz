import React, { useEffect, useState } from "react";
import TopNavbar from "./templates/TopNavbar";
import Dropdown from "./templates/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";


function Trending() {
  const navigate = useNavigate();
  const [category,setCategory]= useState('all')
  const [duration,setDuration]= useState('day')
  const [trending,setTrending]= useState([])

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(trending)

  useEffect(()=>{
    getTrending()
  },[category,duration])


  return (
    <div className="w-screen h-screen p-6 ">
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
        <div className="w-[65%]"> <TopNavbar /></div>
       
        <div className=" flex w-[25%] gap-2 ">
          <Dropdown title="Category" options={["tv", "Movie", "all"]} />
          <Dropdown title="Duration" options={["day", "week"]} />
        </div>
      </div>
    </div>
  );
}

export default Trending;
