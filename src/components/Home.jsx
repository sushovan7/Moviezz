import React from "react";
import SideNavbar from "./templates/SideNavbar";
import TopNavbar from "./templates/TopNavbar";

function Home() {
  document.title = "Moviezz";
  return (
    <>
     <SideNavbar />
      <div className="w-[80%] h-full">
        <TopNavbar />
      </div>
    </>
  );
}

export default Home;
