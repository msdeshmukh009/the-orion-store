import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "CognitiveSurplus",
    description: "Curiosity Rover 11 oz Ceramic Mug Lorem ipsum dolor sit amet.",
    featuredProductDescription: "Astronomy Gifts, NASA Rover Mug, Engineering Gifts. ",
    discountedPrice: 1000,
    originalPrice: 2317,
    image: "https://i.etsystatic.com/8140833/r/il/8f1cf4/2914611906/il_340x270.2914611906_t7uy.jpg",
    isFeatured: true,
    category: "Coffee Mugs",
    rating: 4,
    numberOfReviews: 14,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "KnittedLemonStudio",
    description: "Orion, Astronomy Print Of Orion Constellation In The Night Sky, .",
    featuredProductDescription:
      "Orion's Belt Star Map, Astronomy Gift, Orion Nebula, Gifts For Stargazers. ",
    discountedPrice: 2000,
    originalPrice: 3500,
    image: "https://i.etsystatic.com/5557187/r/il/14376a/2639541341/il_340x270.2639541341_shzn.jpg",
    isFeatured: true,
    category: "Posters",
    rating: 5,
    numberOfReviews: 20,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "EastonWoodworks",
    description: "Orion Constellation Keychain.",
    featuredProductDescription:
      "Science Keychain - Astronomy Gift - Astronomy Keychain - Orion Keychain - Orion Nebula. ",
    discountedPrice: 300,
    originalPrice: 679,
    image:
      "https://i.etsystatic.com/11861054/c/1355/1077/46/231/il/a2b863/2456472379/il_340x270.2456472379_q8ig.jpg",
    isFeatured: false,
    category: "Accessories",
    rating: 2,
    numberOfReviews: 100,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "CenturyPrintsStore",
    description: "Antique Astronomy Wall Art Print.",
    featuredProductDescription: "Orion Star Constellation. ",
    discountedPrice: 2000,
    originalPrice: 3000,
    image:
      "https://i.etsystatic.com/34251122/c/800/635/95/229/il/ab98d1/3691430143/il_340x270.3691430143_mmz8.jpg",
    isFeatured: false,
    category: "Posters",
    rating: 5,
    numberOfReviews: 100,
    inStock: false,
  },
  {
    _id: uuid(),
    title: "Edkaris",
    description: "1886 Map of the Moon - Printable Moon Map ",
    featuredProductDescription: "Antique Lunar Map - Antique Map of Moon - 1800s Moon Map.",
    discountedPrice: 800,
    originalPrice: 1500,
    image:
      "https://i.etsystatic.com/15781228/c/953/758/12/346/il/b3493e/3308527660/il_340x270.3308527660_kxrl.jpg",
    isFeatured: true,
    category: "Posters",
    rating: 3,
    numberOfReviews: 10,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "PrintStopStudio",
    description: "Orion Constellation Unisex Shirt.",
    featuredProductDescription:
      "Orion Nebula Hunter tshirt Eco Friendly Star Constellation Shirt Gift Idea Orion Belt Milky Way.",
    discountedPrice: 800,
    originalPrice: 1000,
    image:
      "https://i.etsystatic.com/13092496/r/il/e10447/3318121131/il_340x270.3318121131_oq8v.jpg",
    isFeatured: true,
    category: "T-shirts",
    rating: 1,
    numberOfReviews: 60,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "IconicPassion",
    description: "Astronomy Gift, Astronomy Mug, Astronomy Coffee Cup, ",
    featuredProductDescription:
      "Equatorial Star Map Gift, Equatorial Star Map Mug, Equatorial Star Map Coffee Cup  ",
    discountedPrice: 1300,
    originalPrice: 1500,
    image:
      "https://i.etsystatic.com/19006207/c/1500/1192/0/237/il/24f287/1979054507/il_340x270.1979054507_gjiu.jpg",
    isFeatured: false,
    category: "Coffee Mugs",
    rating: 4,
    numberOfReviews: 5,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "QualityAppearance",
    description: "Astronaut Spaceman Planets Funny Space Dwarf Solar System Astronomy T-Shirt ",
    featuredProductDescription: "Space Geeks Gifts Astronauts Lovers Birthday Party Present Moon  ",
    discountedPrice: 1100,
    originalPrice: 1200,
    image:
      "https://i.etsystatic.com/13557012/c/1603/1274/651/20/il/e70d67/2289888423/il_340x270.2289888423_cgqa.jpg",
    isFeatured: false,
    category: "T-shirts",
    rating: 3,
    numberOfReviews: 15,
    inStock: true,
  },
];
