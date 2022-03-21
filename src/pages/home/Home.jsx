import "./home.css";
import { CategoryCard, HorizontalCard, Loading } from "../../components";
import { Link } from "react-router-dom";
import { useCategory, useProducts } from "../../context";

const Home = () => {
  const { categories, loader: categoryLoader, error: categoryError } = useCategory();
  const { products, loader: productLoader, error: productError } = useProducts();
  const featuredProducts = products.filter(product => product.isFeatured);
  return (
    <>
      {/* banner */}
      <div
        className="banner flex-total-center"
        style={{ backgroundImage: `url(/assets/bg-img3.jpg)` }}
      >
        <div className="banner-content text-center flex-column">
          <h2 className="banner-heading">The orion store</h2>
          <p className="banner-sub-heading">Lorem ipsum dolor sit amet Lorem, ipsum dolor.</p>
          <div className="banner-cta flex-total-center">
            <Link to="/products" className="btn btn-primary">
              Shop now
            </Link>
            <a href="#categories" className="btn btn-outline-primary">
              Categories
            </a>
          </div>
        </div>
      </div>
      {/* banner-end */}

      {/* category-section */}
      <section className="text-center" id="categories">
        <h1 className="section-heading">Categories</h1>
        <hr className="title-hr" />

        <div className="category-grid">
          {categoryLoader && <Loading />}
          {categoryError && <div>{categoryError}</div>}
          {categories &&
            categories.map(({ _id, categoryName, image }) => (
              <CategoryCard key={_id} category={categoryName} categoryImage={image} />
            ))}
        </div>
      </section>
      {/* category-section-end */}

      {/* featured-products */}
      <section className="text-center featured-product-section">
        <h1 className="section-heading">Featured Products</h1>
        <hr className="title-hr" />
        {productLoader && <Loading />}
        {productError && <div>{productError}</div>}
        <div className="grid-50-50 featured-products">
          {featuredProducts.map(product => (
            <HorizontalCard key={product._id} product={product} />
          ))}
        </div>
      </section>
      {/* featured-products-end */}
    </>
  );
};

export { Home };
