import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Coffee Mugs",
    image: "/assets/products/category-images/coffee-mugs.webp",
  },
  {
    _id: uuid(),
    categoryName: "Posters",
    image: "/assets/products/category-images/posters.webp",
  },
  {
    _id: uuid(),
    categoryName: "T-shirts",
    image: "/assets/products/category-images/t-shirts.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    image: "/assets/products/category-images/accessories.webp",
  },
];
