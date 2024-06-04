import axios from "axios";

const myApi = axios.create({
  baseURL: "https://be-nc-games-haao.onrender.com/api",
});

export const fetchReviews = (searchParams) => {
  return myApi.get("/reviews", { params: { ...searchParams } }).then((res) => {
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

export const patchReviewVotesById = (review_id, inc_votes) => {
  return myApi.patch(`/reviews/${review_id}`, { inc_votes });
};

export const fetchCommentsByReviewId = (review_id) => {
  return myApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postCommentsByReviewId = (review_id, username, body) => {
  return myApi.post(`/reviews/${review_id}/comments`, { username, body });
};

export const deleteCommentByCommentId = (id) => {
  return myApi.delete(`/comments/${id}`);
};
