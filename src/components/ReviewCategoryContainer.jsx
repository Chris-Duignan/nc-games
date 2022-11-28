import useReviewsByCategory from "../hooks/useReviewsByCategory";
import CardList from "./CardList";
import ExpandableSort from "./ExpandableSort";
import ReviewCard from "./ReviewCard";
import SortForm from "./SortForm";

const ReviewCategoryContainer = () => {
  const reviews = useReviewsByCategory();
  const title = `You are viewing ${reviews.slug} games`;

  return (
    <main className="reviewContainer">
      <ExpandableSort tag={"Sort"}>
        <SortForm handleChange={reviews.handleChange} handleSubmit={reviews.handleSubmit} handleReset={reviews.handleReset} searchTerm={reviews.searchTerm}></SortForm>
      </ExpandableSort>
      <CardList data={reviews} title={title} card={ReviewCard} />
    </main>
  );
};

export default ReviewCategoryContainer;
