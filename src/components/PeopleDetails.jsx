import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { asyncLoadPeople, removePeople } from "../store/actions/PeopleActions";
import Loader from "../components/Loader";
import noImage from "/noImage.jpeg";
import { useNavigate } from "react-router-dom";

function PeopleDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieInfo } = useSelector((state) => state.people);
  console.log(movieInfo);
  useEffect(() => {
    dispatch(asyncLoadPeople(id));
    return () => {
      dispatch(removePeople());
    };
  }, []);
  return movieInfo ? (
    <div className="w-screen h-screen relative px-20">
      <i
        onClick={() => navigate(-1)}
        className="ri-arrow-left-line text-5xl absolute top-[5%] left-[4%] cursor-pointer text-zinc-100"
      ></i>
      <div className="container absolute w-[80%] h-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-10 px-10">
        <div className="left rounded-md overflow-hidden w-[30%] h-[80%]">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movieInfo.details.profile_path})`}
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
                  ? movieInfo.details.biography.slice(0,260)
                  : "NO Info"}
                  <span>.....</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default PeopleDetails;
