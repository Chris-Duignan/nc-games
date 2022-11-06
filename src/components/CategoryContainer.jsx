import useCategories from "../hooks/useCategories";
import CardList from "./CardList";
import CategoryCard from "./CategoryCard";

const CategoryContainer = () => {
  const categories = useCategories();
  const title = <h3>You are viewing Categories</h3>;

  return (
    <main className="reviewContainer">
      <CardList data={categories} title={title} card={CategoryCard} />
    </main>
  );
};

export default CategoryContainer;
