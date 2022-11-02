import axios from "axios";

const myApi = axios.create({
  baseURL: "https://board-games-galore.herokuapp.com/api",
});

export const fetchReviews = () => {
  return myApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const fetchReviewById = (review_id) => {
  return myApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const fetchCategories = () => {
  return myApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const fetchReviewsByCategory = (slug) => {
  return myApi.get(`/reviews?category=${slug}`).then((res) => {
    return res.data.reviews;
  });
};

export const patchReviewVotesById = (review_id, inc_votes) => {
  return myApi.patch(`/reviews/${review_id}`, {inc_votes});
};

export const fetchCommentsByReviewId = (review_id) => {
  return myApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  })
}

export const postCommentsByReviewId = (review_id, request) => {
  return myApi.get(`/reviews/${review_id}/comments`, request)
}
