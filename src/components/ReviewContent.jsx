const ReviewContent = ({ children: data }) => {
  return (
    <section className="singleReviewCard">
      <p>{data.review_body}</p>
      <br></br>
    </section>
  );
};

export default ReviewContent;
