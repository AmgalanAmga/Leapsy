export const coffeeCups = {
  small: require("./assets/8oz.png"),
  sprunce: require("./assets/12oz.png"),
  ceder: require("./assets/16oz.png"),
  redwoord: require("./assets/20oz.png"),
  giant: require("./assets/24oz.png"),
};

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
