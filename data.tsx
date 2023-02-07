export const data: { category: string; image: string; name: string }[] = [
  { category: "cold", image: require("./assets/1.png"), name: "Iced Coffee" },
  {
    category: "cold",
    image: require("./assets/2.png"),
    name: "Strawberry Juice",
  },
  {
    category: "cold",
    image: require("./assets/3.png"),
    name: "Cranberry juice",
  },
  { category: "hot", image: require("./assets/4.png"), name: "Mocha" },
  { category: "hot", image: require("./assets/5.png"), name: "Espresso" },
  { category: "hot", image: require("./assets/6.png"), name: "Macchiato" },
  { category: "hot", image: require("./assets/7.png"), name: "Frappe" },
  { category: "hot", image: require("./assets/8.png"), name: "Ristretto" },
  { category: "hot", image: require("./assets/9.png"), name: "Flat White" },
  {
    category: "cold",
    image: require("./assets/10.png"),
    name: "Strawberry Milkshake",
  },
  {
    category: "cake",
    image: require("./assets/garash-cake.jpg"),
    name: "Garash cake",
  },
  {
    category: "cake",
    image: require("./assets/Ice-Cream-Cake-Feature.jpg"),
    name: "Ice cream cake",
  },
  {
    category: "cake",
    image: require("./assets/lemon-layer-cake.jpg"),
    name: "Lemon cake",
  },
  { category: "cake", image: "./assets/moon.jfif", name: "Moon cake" },
  {
    category: "cake",
    image: require("./assets/The-Best-Red-Velvet-Cake.jpg"),
    name: "Red velvet cake",
  },

  {
    category: "blend",
    image: require("./assets/strawberry-banana-smoothie-vert1200.jpg"),
    name: "Strawberry & Banana",
  },
  {
    category: "blend",
    image: require("./assets/carrot-juice-smoothie-with-turmeric-and-ginger-1200.jpg"),
    name: "Orange & Ginger",
  },
  {
    category: "blend",
    image: require("./assets/mango-pineapple-smoothie-5.jpg"),
    name: "Mango & Pineapple",
  },
  {
    category: "blend",
    image: require("./assets/Cucumber-Avocado-Smoothie-Image-1-720x540.jpg"),
    name: "Avocado & Cucumber",
  },
  {
    category: "blend",
    image: require("./assets/blueberry.jpg"),
    name: "Lemon & Blueberry",
  },

  {
    category: "special",
    image: require("./assets/special1.jpg"),
    name: "Special Coffee",
  },
];

export const myFavorite: {
  image: any;
  name: string;
}[] = [
  { image: require("./assets/1.png"), name: "Iced Coffee" },
  { image: require("./assets/2.png"), name: "Strawberry Juice" },
  { image: require("./assets/3.png"), name: "Cranberry juice" },
];
export const seasonal: {
  image: any;
  name: string;
}[] = [
  { image: require("./assets/2.png"), name: "Strawberry Juice" },
  { image: require("./assets/Rectangle.png"), name: "Kiwi juice" },
  { image: require("./assets/3.png"), name: "Cranberry juice" },
];

export const orders = [
  {
    id: 1,
    quantity: 1,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Processing",
  },
  {
    id: 2,
    quantity: 2,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Success",
  },
  {
    id: 3,
    quantity: 1,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Success",
  },
  {
    id: 4,
    quantity: 3,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Canceled",
  },
  {
    id: 5,
    quantity: 2,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Success",
  },
  {
    id: 6,
    quantity: 1,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Processing",
  },
  {
    id: 7,
    quantity: 1,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Canceled",
  },
  {
    id: 8,
    quantity: 2,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Success",
  },
  {
    id: 9,
    quantity: 1,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Success",
  },
  {
    id: 10,
    quantity: 1,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Canceled",
  },
  {
    id: 11,
    quantity: 3,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Success",
  },
  {
    id: 12,
    quantity: 1,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Success",
  },
  {
    id: 13,
    quantity: 2,
    date: Date.now(),
    totalPrice: 10.56,
    status: "Processing",
  },
];
