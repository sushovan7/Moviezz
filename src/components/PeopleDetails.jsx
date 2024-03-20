import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { asyncLoadPeople, removePeople } from "../store/actions/PeopleActions";
import Loader from "../components/Loader";
import noImage from "/noImage.jpeg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function PeopleDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieInfo } = useSelector((state) => state.people);
  useEffect(() => {
    dispatch(asyncLoadPeople(id));
    return () => {
      dispatch(removePeople());
    };
  }, []);
  return movieInfo ? (
    <div className="w-screen h-screen relative px-20 bg-[#6556cd]">
      <i
        onClick={() => navigate(-1)}
        className="ri-arrow-left-line text-5xl absolute top-[5%] left-[4%] cursor-pointer text-zinc-100"
      ></i>
      <div className="container absolute w-[80%] h-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-10 px-10">
        <div className="left rounded-md overflow-hidden w-[30%] h-[80%]">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={movieInfo.details.profile_path ? `https://image.tmdb.org/t/p/original/${movieInfo.details.profile_path})` : noImage}
              alt=""
            />
          </div>
        </div>
        <div className="right w-[60%] h-[80%]  px-5">
          <h1 className="text-white text-4xl mb-10">
            {movieInfo.details.name}
          </h1>
          <div className="w-full h-[85%] text-white flex flex-col gap-4">
            {" "}
            <div className="w-full">
              <h1 className="text-xl text-zinc-400 font-semibold">Known For</h1>
              <h3 className="font-light">
                {movieInfo.details.known_for_department}
              </h3>
            </div>
            <div className="w-full">
              <h1 className="text-xl text-zinc-400 font-semibold">Gender</h1>
              <h3 className="font-light">
                {movieInfo.details.gender === 2 ? "Male" : "Female"}
              </h3>
            </div>
            <div className="w-full">
              <h1 className="text-xl text-zinc-400 font-semibold">Birthdate</h1>
              <h3 className="font-light">
                {movieInfo.details.birthday
                  ? movieInfo.details.birthday
                  : "NO Info"}
              </h3>
            </div>
            <div className="w-full">
              <h1 className="text-xl text-zinc-400 font-semibold">
                Place of birth
              </h1>
              <h3 className="font-light">
                {movieInfo.details.place_of_birth
                  ? movieInfo.details.place_of_birth
                  : "NO Info"}
              </h3>
            </div>
            <div className="w-full">
              <h1 className="text-xl text-zinc-400 font-semibold">
               Biography
              </h1>
              <h3 className="font-light">
                {movieInfo.details.biography
                  ? movieInfo.details.biography.slice(0,200)
                  : "NO Info"}
                  <span>.....</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <h3 className="right text-white absolute top-[32%] text-2xl font-bold right-[22%] flex items-center">
       Played In
      </h3>
      <div
        className="right text-white absolute top-[40%] right-[5%] flex items-center gap-3 w-[30%] overflow-x-auto overflow-y-hidden"
      >
        {movieInfo.combinedCredits.cast.map((cast, index) => {
          return (
            <Link
            to={`/${cast.media_type}/details/${cast.id}`}
              key={index}
              className="w-[10vw] h-[10vw] shrink-0  flex flex-col items-center justify-center gap-3 p-2"
            >
              <img
                className="object-cover shadow-lg rounded-full object-center w-[50%] h-[50%]"
                src={
                  cast.poster_path || cast.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${cast.poster_path || cast.backdrop_path}`
                    : noImage
                }
                alt="image no found"
              />
              <h1 className="text-sm w-[100%] h-[100%] font-light text-zinx-500 text-center">
                {(cast.title || cast.original_title || cast.name || cast.original_name).length < 20 ? (cast.title || cast.original_title || cast.name || cast.original_name) : (cast.title || cast.original_title || cast.name || cast.original_name).slice(0,18)}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default PeopleDetails;
