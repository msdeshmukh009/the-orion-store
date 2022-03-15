import "./verticalCard.css";
const VerticalCard = ({ image, title, description, price, discountedPrice }) => {
  return (
    <div className="card vertical-card">
      <button className="card-wishlist-btn">
        <i className="fas fa-heart-circle"></i>
      </button>
      <div className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt="card-img" />
      </div>
      <div className="card-info-container">
        <span className="text-bold card-heading">{title}</span>
        <span className="card-sub-heading text-gray">{description}</span>
        <div className="price">
          <span className="card-sub-heading text-md">₹ {price} </span>
          <span className="text-line-through text-xs text-gray">₹ {discountedPrice}</span>
        </div>
      </div>
      <div className="card-cta-vertical">
        <button className="btn btn-primary block-btn">
          <span className="btn-icon">
            <i className="fas fa-shopping-cart"></i>
          </span>{" "}
          Add to cart
        </button>
      </div>
    </div>
  );
};

export { VerticalCard };
