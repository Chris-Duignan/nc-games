const ReviewContent = ({ children: data }) => {
  return (
    <section>
      <p>{data.review_body}</p>
      <br></br>
    </section>
  );
};

export default ReviewContent;
