import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    orders: [],
    address: [
      {
        _id: uuid(),
        name: "Adarsh Balika",
        mobile: "5421231231",
        zipCode: "400028",
        street: "244 / Madhani Estate  Senapati Bapat Marg Dadar, Mumbai",
        state: "Maharashtra",
        country: "India",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Jonathan",
    lastName: "Joestar",
    email: "jonathan@gmail.com",
    password: "Jojo@999",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    orders: [],
    address: [
      {
        _id: uuid(),
        name: "Jonathan Joestar",
        mobile: "5421231231",
        zipCode: "400028",
        street: "244 / Madhani Estate  Senapati Bapat Marg Dadar, Mumbai",
        state: "Maharashtra",
        country: "India",
      },
    ],
  },
];
