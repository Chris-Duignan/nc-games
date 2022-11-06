import useReviews from "../hooks/useReviews";
import CardList from "./CardList";
import ReviewCard from "./ReviewCard";

const ReviewContainer = () => {
  const reviews = useReviews();
  const title = "You are viewing all reviews";

  return (
    <main className="reviewContainer">
      <CardList data={reviews} title={title} card={ReviewCard} />
    </main>
  );
};

export default ReviewContainer;

// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { fetchReviews } from "../api";
// import ExpandableSort from "./ExpandableSort";
// import SortBar from "./SortForm";

// const ReviewContainer = () => {
//   const [reviews, setReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [err, setErr] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     const currentParams = Object.fromEntries([...searchParams]);
//     fetchReviews(currentParams)
//       .then((reviews) => {
//         setReviews(reviews);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setErr(err.response.data.msg);
//         setIsLoading(false);
//       });
//   }, [searchParams]);

//   return (
//     <main className="reviewContainer">
//       <section className="sortBar">
//         <ExpandableSort className="sortButton" name="sortButton" tag="Filter">
//           <SortBar setSearchParams={setSearchParams} />
//         </ExpandableSort>
//       </section>
//       <ReviewList isLoading={isLoading} reviews={reviews} err={err} />
//     </main>
//   );
// };

// export default ReviewContainer;
