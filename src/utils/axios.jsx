import axios from "axios";

const endPoint = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDZlNTQyZGQ0OGFhYTY1YTQzZTA2ZTZlNDQ2ZGYzMSIsInN1YiI6IjY1YzE1MzZlY2Y2MmNkMDE2NTk2ZTQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TH62DuUUVUTklLQajtm7_N_CA7fmvzx2G49p6D6oks0",
  },
});

export default endPoint;
