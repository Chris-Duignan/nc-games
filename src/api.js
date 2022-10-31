import axios from "axios";

const myApi = axios.create({
  baseURL: "https://board-games-galore.herokuapp.com/api",
});

export const fetchReviews = () => {
  return myApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};
