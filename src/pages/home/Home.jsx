import "./home.css";
import { CategoryCard, HorizontalCard } from "../../components";
import { categories } from "../../backend/db/categories";
import { featuredProducts, products } from "../../backend/db/products";
const Home = () => {
  return (
    <>
      {/* banner */}
      <div className="banner flex-total-center" style={{ backgroundImage: `url(/assets/bg-img3.jpg)` }}>
        <div className="banner-content text-center flex-column">
          <h2 className="banner-heading">The orion store</h2>
          <p className="banner-sub-heading">Lorem ipsum dolor sit amet Lorem, ipsum dolor.</p>
          <div className="banner-cta flex-total-center">
            <a href="/pages/product-listing/products.html" className="btn btn-primary">
              Shop now
            </a>
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
          {categories.map(({ _id, categoryName, image }) => (
            <CategoryCard key={_id} category={categoryName} categoryImage={image} />
          ))}
        </div>
      </section>
      {/* category-section-end */}

      {/* featured-products */}
      <section className="text-center">
        <h1 class="section-heading">Featured Products</h1>
        <hr class="title-hr" />

        <div className="grid-50-50 featured-products">
          {featuredProducts.map(({ title, description, featuredProductDescription, price, discountedPrice, image }) => (
            <HorizontalCard
              title={title}
              description={description}
              featuredProductDescription={featuredProductDescription}
              price={price}
              discountedPrice={discountedPrice}
              image={image}
            />
          ))}
        </div>
      </section>
      {/* featured-products-end */}
    </>
  );
};

export { Home };
