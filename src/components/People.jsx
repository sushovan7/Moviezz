import React, { useEffect, useState } from "react";
import TopNavbar from "./templates/TopNavbar";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
  const navigate = useNavigate();
  
  const [people, setPeople] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  document.title = 'Moviezz | People'

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      if (data.results.length > 0) {
        setPeople((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshPage = () => {
    if (people === 0) {
      getPeople();
    } else {
      setPage(1);
      setPeople([])
      getPeople();
    }
  };

  useEffect(() => {
   refreshPage();
  }, []);

  return people.length > 0 ? (
    <div className="w-screen h-full p-8">
      <div className="flex w-full items-center justify-between h-[8vh] ">
        <div className="flex w-[20%] \">
          <h1 className="text-2xl font-semibold  text-zinc-400 mb-4">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-2xl text-[#6556CD]"
            ></i>
            People  <small className="text-sm ml-2 text-zinc-600">popular</small>
          </h1>
        </div>
        <div className="w-[80%]">
          <TopNavbar />
        </div>

      </div>
      <InfiniteScroll
        dataLength={people.length} //This is important field to render the next data
        next={getPeople}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={people}  title='person'/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default People;
