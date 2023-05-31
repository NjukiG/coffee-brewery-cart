const productsArray = [
  {
    title: "Iced Espresso",
    description:
      "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener. You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos, lattes and flat whites.",
    ingredients: ["Espresso", "Ice", "Sugar*", "Cream*"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/Home_Made_Ice_Coffee.jpg",
    id: 2,
    price: 17.99,
  },
  {
    title: "Cold Brew",
    description:
      "The trendiest of the iced coffee bunch, cold brew coffees are made by steeping coffee beans from anywhere between 6-36 hours, depending on how strong you would like your cold brew. Once the beans are done steeping, add cold milk or cream.",
    ingredients: ["Long steeped coffee", "Ice"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ColdBrewCoffeein_Cans.png/640px-ColdBrewCoffeein_Cans.png",
    id: 3,
    price: 25.99,
  },
  {
    title: "Frappuccino",
    description:
      "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that’s topped with whipped cream and syrup. ",
    ingredients: ["Espresso", "Blended ice", "Whip*"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Strawberry_Delight_Frappuccino.JPG",
    id: 4,
    price: 13.49,
  },
  {
    title: "Nitro",
    description:
      "A cold brew + nitrogen bubbles = a cold brew coffee with a frothy, Guinness-like consistency. (It’s poured via a nitro tap, too.)",
    ingredients: ["Coffee", "Nitrogen bubbles", "Sugar*", "Cream*"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Nitro_Cold_Brew.jpg",
    id: 5,
    price: 15.99,
  },
  {
    description: "cold apple is cold",
    id: 104,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg",
    ingredients: ["Ice", "Apple"],
    title: "Iced Apple",
    price: 20.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
