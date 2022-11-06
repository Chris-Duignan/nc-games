const ReviewHeader = ({ children: data }) => {
  return (
    <>
      <img
        src={data.review_img_url}
        alt={`game pieces for ${data.title}`}
        className="reviewImg"
      ></img>
      <header>
        <h2>{data.title}</h2>
        <p> from {data.designer}</p>
        <p className="category">
          Posted in <em>{data.category}</em> by <b>{data.owner}</b> at{" "}
          {data.created_at}
        </p>
      </header>
      <br></br>
    </>
  );
};

export default ReviewHeader;
