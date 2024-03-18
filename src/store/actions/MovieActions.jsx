import axios from "../../utils/axios";
import { loadMovie } from "../reducers/MovieSlice";
export {loadMovie, removeMovie } from "../reducers/MovieSlice";

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendation = await axios.get(`/movie/${id}/recommendations`);
    const credits = await axios.get(`/movie/${id}/credits`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);

    let finalData = {
      details: details.data,
      externalId: externalId.data,
      recommendation: recommendation.data.results,
      credits: credits.data.cast,
      similar: similar.data.results,
      videos: videos.data.results.find((movie) => movie.type === "Trailer"),
    };
    dispatch(loadMovie(finalData))
  } catch (error) {
    console.log(error);
  }
};
