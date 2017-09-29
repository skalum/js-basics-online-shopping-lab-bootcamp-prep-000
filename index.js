var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push({[itemName]: getRandomInt(1,100)});
  console.log(`${itemName} has been added to your cart.`);

  return cart;
}

function viewCart() {
  const length = cart.length;

  if (length == 0) {
    console.log("Your shopping cart is empty.");
  } else if (length == 1) {

  } else {
    const itemsAndPrices = [];

    for (var i = 0; i < length; i++) {
      const item = cart[i];
      const itemName = Object.keys(item)[0];
      const price = item[itemName];

      console.log(itemName);

      itemsAndPrices.push(`${itemName} at $${price}`);
    }

    console.log(`In your cart, you have ${itemsAndPrices.slice(0, length-1).join(", ")}, and ${itemsAndPrices.slice(length-1)}.`;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

viewCart();
addToCart("Apples");
addToCart("Pears");
addToCart("Plums");
viewCart();
