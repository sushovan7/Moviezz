import React, { useEffect, useState } from "react";
import TopNavbar from "./templates/TopNavbar";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function Movies() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  document.title = 'Moviezz | Movies';

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/discover/movie?page=${page}`);
      if (data.results.length > 0) {
        setMovies((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshPage = () => {
    if (movies === 0) {
      getmovies();
    } else {
      setPage(1);
      setMovies([])
      getMovies();
    }
  };

  useEffect(() => {
   refreshPage();
  },[]);

  return movies.length > 0 ? (
    <div className="w-screen h-full p-8">
      <div className="flex w-full items-center justify-between h-[8vh] ">
        <div className="flex w-[10%] \">
          <h1 className="text-2xl font-semibold  text-zinc-400 mb-4">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-2xl text-[#6556CD]"
            ></i>
            Movies
          </h1>
        </div>
        <div className="w-[85%]">
          {" "}
          <TopNavbar />
        </div>

      </div>
      <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={getMovies}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={movies} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Movies;
