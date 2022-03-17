import "./verticalCard.css";
const VerticalCard = ({ product }) => {
  const { image, title, description, price, discountedPrice, rating, numberOfReviews, inStock } =
    product;
  return (
    <div className="card vertical-card">
      {!inStock && (
        <div class="overlay-container">
          <h2 class="overlay-text">Out of Stock</h2>
        </div>
      )}

      <button className="card-wishlist-btn">
        <i className="fas fa-heart-circle"></i>
      </button>
      <div className="card-image-container">
        <img
          className="responsive-img rounded-top-corner-img"
          src={image}
          alt={description}
          width="340px"
          height="270px"
        />
        <div className="rating-info">
          <span>
            {rating}
            <i className="fas fa-star rating-star-icon colored-star"></i>
          </span>
          <span>|</span>
          <span>{numberOfReviews}</span>
        </div>
      </div>
      <div className="card-info-container">
        <span className="text-bold card-heading">{title}</span>
        <span className="card-sub-heading text-gray">{description}</span>
        <div className="price">
          <span className="card-sub-heading text-md">
            ₹ {new Intl.NumberFormat("en-IN").format(price)}
          </span>
          <span className="text-line-through text-xs text-gray">
            ₹ {new Intl.NumberFormat("en-IN").format(discountedPrice)}
          </span>
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
