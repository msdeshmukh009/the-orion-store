import "./categoryCard.css";
const CategoryCard = ({ category, categoryImage }) => {
  return (
    <div className="category card text-card text-center">
      <div className="overlay-container">
        <h2 className="overlay-text text-bolder">{category}</h2>
      </div>
      <img src={categoryImage} alt={category} />
    </div>
  );
};

export { CategoryCard };
