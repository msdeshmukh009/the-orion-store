import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
];

export const featuredProducts = [
  {
    _id: uuid(),
    title: "CognitiveSurplus",
    description: "Curiosity Rover 11 oz Ceramic Mug Lorem ipsum dolor sit amet.",
    featuredProductDescription: "Astronomy Gifts, NASA Rover Mug, Engineering Gifts. ",
    price: "1000 ",
    discountedPrice: "2,317",
    image: "/assets/products/products-card-images/curiosity-mug-card-img.webp",
  },
  {
    _id: uuid(),
    title: "KnittedLemonStudio",
    description: "Orion, Astronomy Print Of Orion Constellation In The Night Sky, .",
    featuredProductDescription: "Orion's Belt Star Map, Astronomy Gift, Orion Nebula, Gifts For Stargazers. ",
    price: "1000",
    discountedPrice: "1,793",
    image: "/assets/products/products-card-images/painting-card-img.jpg",
  },
  {
    _id: uuid(),
    title: "EastonWoodworks",
    description: "Orion Constellation Keychain.",
    featuredProductDescription: "Science Keychain - Astronomy Gift - Astronomy Keychain - Orion Keychain - Orion Nebula. ",
    price: "300 ",
    discountedPrice: "679",
    image: "/assets/products/products-card-images/key-chain-card-img.jpg",
  },
  {
    _id: uuid(),
    title: "Chopshopstore",
    description: "60 Years of Space Exploration in Pasadena, CA.",
    featuredProductDescription: "Celebrating 60 years of space exploration.",
    price: "1000 ",
    discountedPrice: "2,317",
    image: "/assets/products/products-card-images/poster-card-img.jpg",
  },
];
