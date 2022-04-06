import "./singleProduct.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context";
import { Loading } from "../../components/loading/Loading";
import { AddToCartButton } from "../../components/vertical-card/AddToCartButton";
import { AddToWishlistButton } from "../../components/vertical-card/AddToWishlistButton";
import { NotFound } from "../not-found/NotFound";

const SingleProduct = () => {
  const [isFetching, setIsFetching] = useState({ cart: false, wishlist: false });

  const { productId } = useParams();

  const { products, loader } = useProducts();

  const productFound = products.find(product => product.id === productId);

  return productFound ? (
    <main className="main-product grid-50-50">
      <div className="product-img-container">
        <img className="responsive-img" src={productFound?.image} alt={productFound?.description} />
      </div>

      <div className="product-content flex-column">
        <div className="product-info flex-column">
          <div>
            <h2>{productFound?.description}</h2>
            <span>{productFound?.title}</span>
          </div>

          <div className="rating-field-container">
            {[1, 2, 3, 4, 5].map(rating => (
              <i
                key={rating}
                className={`fas fa-star rating-star-icon ${
                  productFound?.rating >= rating ? "colored-star" : ""
                }`}
              ></i>
            ))}
          </div>

          <div className="price">
            <span className="card-sub-heading text-md">
              ₹ {new Intl.NumberFormat("en-IN").format(productFound?.discountedPrice)}
            </span>
            <span className="text-line-through text-xs text-gray">
              ₹ {new Intl.NumberFormat("en-IN").format(productFound?.originalPrice)}
            </span>
          </div>
        </div>

        <div className="product-status flex-column">
          <ul className="product-status-list no-style-list inline-style-list flex-total-center">
            <li className="flex-column text-center">
              <i className="text-lg fas fa-truck"></i>
              <span className="w-15ch text-xs">Fast Delivery Available </span>
            </li>
            <li className="flex-column text-center">
              <i className="text-lg fas fa-check-square"></i>
              <span className="w-15ch text-xs">Price displayed is inclusive of GST</span>
            </li>
            <li className="flex-column text-center">
              <i className="text-lg fas fa-calendar-check"></i>
              <span className="w-15ch text-xs">
                {productFound?.inStock ? "Currently in stock" : "Out of stock"}
              </span>
            </li>
          </ul>

          <div className="product-cta flex-column">
            {productFound?.inStock ? (
              <AddToCartButton
                product={productFound}
                isFetching={isFetching}
                setIsFetching={setIsFetching}
              />
            ) : (
              <button className="btn block-btn btn-secondary">Out of stock</button>
            )}
            <AddToWishlistButton
              product={productFound}
              isFetching={isFetching}
              setIsFetching={setIsFetching}
            />
          </div>

          <div>
            <h3>Description</h3>
            {productFound?.detailedDescription}
          </div>
        </div>
      </div>
    </main>
  ) : loader ? (
    <Loading />
  ) : (
    <NotFound />
  );
};

export { SingleProduct };
