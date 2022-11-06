import useCategories from "../hooks/useCategories";
import CardList from "./CardList";
import CategoryCard from "./CategoryCard";

const CategoryContainer = () => {
  const categories = useCategories();
  const title = "You are viewing Categories";

  return (
    <main className="reviewContainer">
      <CardList data={categories} title={title} card={CategoryCard} />
    </main>
  );
};

export default CategoryContainer;
