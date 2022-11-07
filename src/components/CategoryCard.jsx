import { Link } from "react-router-dom";

const CategoryCard = (data) => {
  return (
    <Link
      className="link cardLink"
      to={`/categories/${data.slug}`}
      key={data.slug}
    >
      <li key={data.slug} className="card">
        <h4>{data.slug}: </h4>
        <p>{data.description}</p>
      </li>
    </Link>
  );
};

export default CategoryCard;
