import React from "react";
import { Link } from "react-router-dom";

function TopNavbar() {
  return (
    <>
      <div className="w-full relative   h-[10vh] flex items-center justify-center">
        <i class="ri-search-line text-2xl text-zinc-300"></i>
        <input
          className="mx-10 text-zinc-100 w-[50%] border-none outline-none px-4 bg-transparent text-l py-2"
          type="text"
          placeholder="Search Anything"
        />
        <i class="ri-close-large-line text-2xl text-zinc-300"></i>
      </div>
      <div className="w-[50%] px-10 py-4 h-[40vh] absolute top-[10%] left-[35%] bg-zinc-200 flex flex-col gap-2 overflow-y-auto">
        <Link className="w-full font-semibold text-zinc-600 p-2 flex items-center justify-start gap-2 border-b-[1px] border-zinc-100 hover:bg-zinc-300 hover:text-black">
          <img
            className="object-cover rounded-full object-center w-[6vh] h-[6vh] bg-blue-400"
            src=""
            alt=""
          />
          <span>hello everyone</span>
        </Link>
        <Link className="w-full font-semibold text-zinc-600 p-2 flex items-center justify-start gap-2 border-b-[1px] border-zinc-100 hover:bg-zinc-300 hover:text-black">
          <img
            className="object-cover rounded-full object-center w-[6vh] h-[6vh] bg-blue-400"
            src=""
            alt=""
          />
          <span>hello everyone</span>
        </Link>
        <Link className="w-full font-semibold text-zinc-600 p-2 flex items-center justify-start gap-2 border-b-[1px] border-zinc-100 hover:bg-zinc-300 hover:text-black">
          <img
            className="object-cover rounded-full object-center w-[6vh] h-[6vh] bg-blue-400"
            src=""
            alt=""
          />
          <span>hello everyone</span>
        </Link>
        <Link className="w-full font-semibold text-zinc-600 p-2 flex items-center justify-start gap-2 border-b-[1px] border-zinc-100 hover:bg-zinc-300 hover:text-black">
          <img
            className="object-cover rounded-full object-center w-[6vh] h-[6vh] bg-blue-400"
            src=""
            alt=""
          />
          <span>hello everyone</span>
        </Link>
        <Link className="w-full font-semibold text-zinc-600 p-2 flex items-center justify-start gap-2 border-b-[1px] border-zinc-100 hover:bg-zinc-300 hover:text-black">
          <img
            className="object-cover rounded-full object-center w-[6vh] h-[6vh] bg-blue-400"
            src=""
            alt=""
          />
          <span>hello everyone</span>
        </Link>
      </div>
    </>
  );
}

export default TopNavbar;
