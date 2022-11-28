import useReviews from "../hooks/useReviews";
import CardList from "./CardList";
import ExpandableSort from "./ExpandableSort";
import ReviewCard from "./ReviewCard";
import SortForm from "./SortForm";

const ReviewContainer = () => {
  const reviews = useReviews();
  const title = "You are viewing all reviews";

  return (
    <main className="reviewContainer">
      <ExpandableSort tag={"Sort"}>
        <SortForm
          handleChange={reviews.handleChange}
          handleSubmit={reviews.handleSubmit}
          handleReset={reviews.handleReset}
          searchTerm={reviews.searchTerm}
        ></SortForm>
      </ExpandableSort>
      <CardList data={reviews} title={title} card={ReviewCard} />
    </main>
  );
};

export default ReviewContainer;
