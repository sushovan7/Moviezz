import React from "react";
import { Link } from "react-router-dom";

function SideNavbar() {
  return (
    <div className="w-[20%] h-full px-10 py-5 border-r-2 border-zinc-500 ">
      <div className="flex items-center justify-center gap-2 p-4 text-lg border-b-2 border-zinc-500">
        <i className="ri-vidicon-fill text-[#6556cd] text-3xl"></i>
        <h1 className="text-center text-white  text-2xl font-semibold">
          Moviezz
        </h1>
      </div>
      <div className="w-full mt-10 pb-5  flex flex-col">
        <h1 className=" text-zinc-300 text-xl font-bold ">New Feeds</h1>
        <nav className="flex w-full flex-col justify-start items-start gap-2 mt-5">
          <Link to='/trending' className="text-zinc-400 text-xl w-full duration-500 rounded-md hover:bg-[#6556cd] hover:text-[#fff] py-2 px-4">
            <i className="ri-fire-fill mr-2"></i> Trending
          </Link>
          <Link className="text-zinc-400 text-xl w-full duration-500  rounded-md hover:bg-[#6556cd] hover:text-[#fff] py-2 px-4">
            <i className="ri-bard-fill mr-2"></i> Popular
          </Link>
          <Link className="text-zinc-400 text-xl w-full duration-500  rounded-md hover:bg-[#6556cd] hover:text-[#fff] py-2 px-4">
            <i className="ri-film-fill mr-2"></i> Movies
          </Link>
          <Link className="text-zinc-400 text-xl w-full duration-500  rounded-md hover:bg-[#6556cd] hover:text-[#fff] py-2 px-4">
            <i className="ri-tv-fill mr-2"></i> Tv shows
          </Link>
          <Link className="text-zinc-400 text-xl w-full duration-500  rounded-md hover:bg-[#6556cd] hover:text-[#fff] py-2 px-4">
            <i className="ri-user-3-fill mr-2"></i> People
          </Link>
        </nav>
      </div>
      <hr />
      <div className="w-full mt-10 mb-10 flex flex-col">
        <h1 className=" text-zinc-300 text-xl font-bold ">Website Info</h1>
        <nav className="flex w-full flex-col justify-start items-start gap-2 mt-5">
          <Link className="text-zinc-400 text-xl w-full duration-500 rounded-md hover:bg-[#6556cd] hover:text-[#fff] py-2 px-4">
            <i className="ri-information-fill mr-2"></i>About Us
          </Link>
          <Link className="text-zinc-400 text-xl w-full duration-500  rounded-md hover:bg-[#6556cd] hover:text-[#fff] py-2 px-4">
            <i className="ri-phone-fill mr-2"></i> Contacts Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default SideNavbar;

// primary-#1f1e24
// secondary-#6556cd
