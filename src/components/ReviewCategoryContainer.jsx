import useReviewsByCategory from "../hooks/useReviewsByCategory";
import CardList from "./CardList";
import ReviewCard from "./ReviewCard";

const ReviewCategoryContainer = () => {
  const reviews = useReviewsByCategory();
  const title = <h3>You are viewing {reviews.slug} games</h3>;

  return (
    <main className="reviewContainer">
      <CardList data={reviews} title={title} card={ReviewCard} />
    </main>
  );
};

export default ReviewCategoryContainer;
