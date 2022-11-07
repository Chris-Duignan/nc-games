import useReviewsByCategory from "../hooks/useReviewsByCategory";
import CardList from "./CardList";
import ReviewCard from "./ReviewCard";

const ReviewCategoryContainer = () => {
  const reviews = useReviewsByCategory();
  const title = `You are viewing ${reviews.slug} games`;

  return (
    <main className="reviewContainer">
      <CardList data={reviews} title={title} card={ReviewCard} />
    </main>
  );
};

export default ReviewCategoryContainer;
