export const coffeeCups = [
  { image: require("./assets/8oz.png"), name:"small", price:"3.15" },
  { image: require("./assets/12oz.png"), name:"sprunce", price:"3.25" },
  { image: require("./assets/16oz.png"), name:"ceder", price:"4" },
  { image: require("./assets/20oz.png"), name:"redwoord", price:"4.88" },
  { image: require("./assets/24oz.png"), name:"giant", price:"6" },
];

export const foamAndWhip = {
  foam: [
    { label: "Extra foam", value: "Extra foam" },
    { label: "Whole milk", value: "Whole milk" },
    { label: "Skim milk foam", value: "Skim milk foam" },
    { label: "Microfoam", value: "Microfoam" },
  ],
  whip: [
    { label: "No whip", value: "No whip" },
    { label: "Whipped", value: "Whipped" },
  ],
};

export const cardArr = [
  {
    image: require("./assets/visa.png"),
    card: "Credit card",
    type: "Visa",
    cardNumber: "********3306",
  },
  {
    image: require("./assets/debit.png"),
    card: "Debit card",
    type: "Mastercard",
    cardNumber: "********3306",
  },
];
export const methodArr = [
  {
    image: require("./assets/money.png"),
    card: "Cash",
    type: "Pay at store when pick up",
  },
  {
    image: require("./assets/pay.png"),
    card: "Apple Pay",
    type: "example@icloud.com",
  },
];
export const addNewCardInput = [
  { name: "Cardholder name", keyboardType: "default" },
  { name: "Card number", keyboardType: "numeric" },
  { name: "Expire Date", keyboardType: "numeric" },
  { name: "CVV", keyboardType: "numeric" },
];
