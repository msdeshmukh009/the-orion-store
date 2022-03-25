import { useCategory } from "../../context";
import "./categoryCard.css";
const CategoryCard = ({ category, categoryImage }) => {
  const { navigateToCategory } = useCategory();
  return (
    <div
      className="category card text-card text-center"
      onClick={() => navigateToCategory(category)}
    >
      <h3 className="category-title text-bolder">{category}</h3>
      <img src={categoryImage} alt={category} />
    </div>
  );
};

export { CategoryCard };
