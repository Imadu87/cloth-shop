import product1 from "../assets/products/product1.jfif"
import product1image2 from "../assets/products/product1image2.webp"
import product1image3 from "../assets/products/product1image3.jpg"
import product1image4 from "../assets/products/product1image4.jfif"
import product2 from "../assets/products/product2.webp"
import product2image2 from "../assets/products/product2image2.webp"
import product2image3 from "../assets/products/product2image3.webp"
import product2image4 from "../assets/products/product2image4.jfif"
import product3 from "../assets/products/product3.jpg"
import product3image2 from "../assets/products/product3image2.jfif"
import product3image3 from "../assets/products/product3image3.webp"
import product3image4 from "../assets/products/product3image4.jfif"
import product4 from "../assets/products/product4.jpg"
import product4image2 from "../assets/products/product4image2.jfif"
import product4image3 from "../assets/products/product4image3.jfif"
import product4image4 from "../assets/products/product4image4.jfif"

export const allProducts = [
  {
    id: 1,
    name: "Black Cotton",
    price: 1000,
    image1: product1,
    image2: product1image2,
    image3: product1image3,
    image4: product1image4,
    discount: 20,
    saleQuantity: 50,
    isSale: true,
    description:
      "A classic white cotton shirt that's perfect for any occasion. Made from 100% breathable cotton, it offers comfort and style in one package.",
  },
  {
    id: 2,
    name: "White Cotton",
    price: 1500,
    image1: product2,
    image2: product2image2,
    image3: product2image3,
    image4: product2image4,
    discount: 15,
    saleQuantity: 30,
    isSale: true,
    description:
      "Stylish blue jeans that offer a perfect fit and comfort for all-day wear.",
  },
  {
    id: 3,
    name: "Gray Cotton",
    price: 2200,
    image1: product3,
    image2: product3image2,
    image3: product3image3,
    image4: product3image4,
    discount: 25,
    saleQuantity: 46,
    description:
      "A vibrant red t-shirt that's both comfortable and fashionable.",
  },
  {
    id: 4,
    name: "Blue Cotton",
    price: 3200,
    image1: product4,
    image2: product4image2,
    image3: product4image3,
    image4: product4image4,
    discount: 10,
    saleQuantity: 20,
    description:
      "A sleek black jacket that's perfect for adding a touch of sophistication to any outfit.",
  },
];
