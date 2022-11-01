import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../api";

const SingleReview = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviewById(review_id)
      .then((review) => {
        setReview(review);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
      });
  }, [review_id]);

  if (err) return <h3>Review {err}</h3>;
  if (isLoading) return <h3>Loading ...</h3>;
  else
    return (
      <main className="singleReview">
        <article className="review">
          <img
            src={review.review_img_url}
            alt={review.title}
            className="reviewImg"
          ></img>
          <section className="reviewBody">
            <h2>{review.title}</h2>
            <p> from {review.designer}</p>
            <p className="category">
              Posted in <em>{review.category}</em> by <b>{review.owner}</b> at{" "}
              {review.created_at}
            </p>
            <br></br>
            <p>{review.review_body}</p>
            <br></br>
            <p>
              <b>{review.votes}</b> victory points
            </p>
          </section>
        </article>
      </main>
    );
};

export default SingleReview;
