import axios from "axios";

const myApi = axios.create({
  baseURL: "https://board-games-galore.herokuapp.com/api",
});

export const fetchReviews = () => {
  return myApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const fetchCategories = () => {
  return myApi.get("/categories").then((res) => {
    return res.data.categories;
  })
}

export const fetchReviewsByCategory = (slug) => {
  return myApi.get(`/reviews?category=${slug}`).then((res) => {
    return res.data.reviews;
  })
}