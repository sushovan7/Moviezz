import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TVshows from "./components/TVshows";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PeopleDetails from "./components/PeopleDetails";
import Trailer from "./components/Trailer";
import Error from "./components/Error";

function App() {
  return (
    <div className="w-screen h-screen flex bg-[#1f1e24]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} >
          <Route path="/movie/details/:id/trailer" element={<Trailer />}/>
        </Route>
        <Route path="/tv" element={<TVshows />} />
        <Route path="/tv/details/:id" element={<TvDetails />} >
        <Route path="/tv/details/:id/trailer" element={<Trailer />}/>
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<PeopleDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
