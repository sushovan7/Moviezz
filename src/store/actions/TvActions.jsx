import axios from "../../utils/axios";
import { loadTv } from "../reducers/TvSlice";
export {loadTv, removeTv } from "../reducers/TvSlice";

export const asyncLoadTv = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendation = await axios.get(`/tv/${id}/recommendations`);
    const credits = await axios.get(`/tv/${id}/credits`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);

    let finalData = {
      details: details.data,
      externalId: externalId.data,
      recommendation: recommendation.data.results,
      credits: credits.data,
      similar: similar.data,
      videos: videos.data.results.find(tv=> {
        return tv.type === 'Trailer'
      }),
    };
    dispatch(loadTv(finalData))
  } catch (error) {
    console.log(error);
  }
};
