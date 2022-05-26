import { Link } from "react-router-dom";

const Order = ({ order }) => {
  const { orderedAt, orderId, amountPaid, deliveryAddress, orderedProducts } = order;

  return (
    <div className="card text-card">
      <h3 className="text-success">Order Confirmed</h3>

      <div className="order-info flex-column">
        <small className="text-gray">{orderedAt}</small>
        <span>OrderId {orderId}</span>
        <span>Total:₹ {amountPaid}</span>
      </div>

      <div className="card-text">
        <span className="text-semibold">Delivery Address:</span>
        <div>
          <h4>{deliveryAddress.name}</h4>
          <address className="card-text">
            <span>{deliveryAddress.street}</span>
            <span>{deliveryAddress.state}</span>
            <span>{deliveryAddress.country}</span>
            <span>{deliveryAddress.zipCode}</span>
            <span>{deliveryAddress.mobile}</span>
          </address>
        </div>
      </div>
      {orderedProducts.map(({ id, _id, image, title, detailedDescription, qty }) => (
        <Link
          to={`/products/details/${id}`}
          key={_id}
          className="card horizontal-card text-decoration-none"
        >
          <div className="card-image-container">
            <img className="responsive-img rounded-top-corner-img" src={image} alt={title} />
          </div>
          <div className="horizontal-card-content">
            <div className="card-info-container">
              <span className="text-bold card-heading">{title}</span>
              <span className="card-sub-heading text-gray">{detailedDescription}</span>
              <span>qty:{qty}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export { Order };
