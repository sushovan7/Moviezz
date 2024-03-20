import React, { useEffect, useState } from "react";
import TopNavbar from "./templates/TopNavbar";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "./templates/Dropdown";

function Movies() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const [category,setCategory]=useState('now_playing')

  document.title = 'Moviezz | Movies';

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
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
      getMovies();
    } else {
      setPage(1);
      setMovies([])
      getMovies();
    }
  };

  useEffect(() => {
   refreshPage();
  },[category]);

  return movies.length > 0 ? (
    <div className="w-screen h-full p-8">
      <div className="flex w-full items-center justify-between h-[8vh] ">
        <div className="flex w-[20%] \">
          <h1 className="text-2xl font-semibold  text-zinc-400 mb-4">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-2xl cursor-pointer text-[#6556CD]"
            ></i>
            Movies <small className="text-sm ml-2 text-zinc-600">{category}</small>
          </h1>
        </div>
        <div className="w-[65%]">
          {" "}
          <TopNavbar />
        </div>
        <div className=" flex w-[15%] gap-2 ">
          <Dropdown
            title="Category"
            options={["upcoming","popular", "top_rated","now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={getMovies}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={movies} title='movie'/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Movies;
