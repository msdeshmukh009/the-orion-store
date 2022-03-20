const HorizontalCard = ({ product }) => {
  const { title, description, featuredProductDescription, originalPrice, discountedPrice, image } =
    product;
  return (
    <div className="card horizontal-card">
      <span className="card-badge">New</span>
      <div className="card-image-container">
        <img className="responsive-img rounded-top-corner-img" src={image} alt={description} />
      </div>

      <div className="horizontal-card-content">
        <div className="card-info-container text-left">
          <span className="text-bold card-heading">{title}</span>
          <span className="card-sub-heading text-gray">{description}</span>
          <div className="price">
            <span className="card-sub-heading text-md">
              ₹{new Intl.NumberFormat("en-IN").format(discountedPrice)}
            </span>
            <span className="text-line-through text-xs text-gray">
              {new Intl.NumberFormat("en-IN").format(originalPrice)}
            </span>
          </div>
          <div className="card-paragraph">{featuredProductDescription}</div>
        </div>

        <div className="card-call-to-action-horizontal">
          <button className="btn btn-primary block-btn">
            <span className="btn-icon">
              <i className="fas fa-shopping-cart"></i>
            </span>
            Add to cart
          </button>
          <button className="btn btn-outline-primary block-btn">Move to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export { HorizontalCard };
